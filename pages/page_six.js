import React, { Component } from 'react';
import { AsyncStorage, Picker } from 'react-native';
import { QuestionList }from '../questionList';
import { Container, Content, Text, Item, Separator} from 'native-base';
import NormalInputComponent from '../components/input-normal';
import RadioGroupComponent from '../components/radio-group';
import MyDatePicker from '../components/date-picker';
import CheckBoxComponent from '../components/check-box';
import TableComponent from '../components/table';

export default class Page_6 extends Component {

    myQuestions = new QuestionList().questions[5];

    constructor(props) {
        super(props);
        this.state = {
            answers: {
            },
            hidden: []
        };
        this.virtualState= {
            answers: {
            }
        };

        this.handleChange = this.handleChange.bind(this);
        this.generateHideSignal = this.generateHideSignal.bind(this);
        this.getCompletion = this.getCompletion.bind(this);
        this.checkIfAnswered = this.checkIfAnswered.bind(this);
    }


    componentWillMount() {
        this.virtualState.answers = this.props.answer;
        const hiddenArray = [];
        this.myQuestions.forEach(question => {
            hiddenArray.push({
                'ID': question.id,
                'hidden': question.hidden
            })
        });
        this.setState({
            answers: this.props.answer,
            hidden: hiddenArray
        },() => {
            this.getCompletion();
        })
    }

    componentWillReceiveProps(props) {
        this.virtualState.answers = props.answer;
        this.setState({
            answers: props.answer
        })
    }

    handleChange(index, answers) {
        this.virtualState.answers[index].Record_Value = answers;
        this.props.handleChange(5, this.virtualState.answers, this.state.hidden);
        this.getCompletion();
    }

    getCompletion() {
        const validAnswer = [];
        const hasAnswer = [];
        this.state.hidden.forEach((item, index) => {
            if (!item.hidden) {
                const answer = {
                    id: item.ID,
                    index: index
                };
                validAnswer.push(answer);
            }
        });
        validAnswer.forEach((item) => {
            if(Array.isArray(this.state.answers[item.index].Record_Value)) {
                if (this.checkIfAnswered(this.virtualState.answers[item.index].Record_Value)) {
                    console.log(item);
                    hasAnswer.push(item);
                }
            } else {
                if(this.state.answers[item.index].Record_Value) {
                    console.log(this.state.answers[item.index].Record_Value);
                    hasAnswer.push(item);
                }
            }
        });
        this.props.submitCompletion(5, validAnswer.length, hasAnswer.length);
    }

    checkIfAnswered(answer) {
        if (Array.isArray(answer[0])) {
            let answeredNum = 0;
            answer.forEach((row, index)=> {
                for (let col = 1; col < row.length; col ++) {
                    if (row[col].Record_Value){
                        console.log(row[col].Record_Value);
                        answeredNum ++;
                    }
                }
            });
            return (answeredNum !==0)
        } else {
            let num = 0;
            answer.forEach(item => {
                if(item.Record_Value)
                    num ++;
            });
            return (num !== 0);
        }
    }

    generateHideSignal(index, id) {
        id.forEach(item => {
            if (item > 0) {
                this.state.hidden[item].hidden = true;
            } else {
                this.state.hidden[-item].hidden = false
            }
        });
        this.setState({
            hidden: this.state.hidden
        }, ()=> {
        })
    }

    switch_Widget = (widget, index) => {
        switch (widget.type)
        {
            case 'input':
                return ( <NormalInputComponent index={index} handleChange={this.handleChange} value={this.state.answers[index].Record_Value} title = {widget.tittle} id = {widget.id} content = {widget.content} hidden = {this.state.hidden[index].hidden}/>);

            case 'radio':
                return (
                    <RadioGroupComponent index={index} generateHideSignal={this.generateHideSignal} handleChange={this.handleChange} value={this.state.answers[index].Record_Value} title = {widget.tittle} id = {widget.id} options = {widget.content} hidden = {this.state.hidden[index].hidden} hiddenList = {widget.hiddenlist ? widget.hiddenlist : null }/>
                );
            case 'date':
                return (
                    <MyDatePicker index={index} handleChange={this.handleChange} value={this.state.answers[index].Record_Value} title = {widget.tittle} id = {widget.id} hidden = {this.state.hidden[index].hidden} hidden = {this.state.hidden[index].hidden} />
                );
            case 'checkbox':
                return (
                    <CheckBoxComponent index={index} handleChange={this.handleChange} generateHideSignal={this.generateHideSignal} value={this.state.answers[index].Record_Value} title = {widget.tittle} id = {widget.id} options = {widget.content} hidden = {this.state.hidden[index].hidden} hiddenList = {widget.hiddenlist ? widget.hiddenlist : null }/>
                );
            case 'table':
                return (
                    <TableComponent index={index} handleChange={this.handleChange}  title = {widget.tittle} id = {widget.id} configuration = {widget.configuration} value={this.state.answers[index].Record_Value} hidden = {this.state.hidden[index].hidden}/>
                );
            default:
                return (<Text>
                        other
                    </Text>
                )
        }
    };

    render() {
        return (
            <Container>
                <Content>
                    {
                        this.myQuestions.map((d, index) => (
                            <Item key={index}>
                                {this.switch_Widget(d, index)}
                            </Item>
                        ))
                    }
                    <Separator style={{alignItems: 'center'}}>
                        <Text>
                            本页结束
                        </Text>
                    </Separator>
                </Content>

            </Container>
        );
    }
}


