export class modelList {
    questions = [
        [
            {
                'id': '1.1',
                'content': [
                    {
                        'dataType': 'text',
                        'inform': '',
                        'validType': 'number'
                    }
                ],
                'hidden': false,
                'type': 'input',
                'tittle': '体检编号：（此项体检当天填写）'
            },
            {
                'id': '1.2.1',
                'content': [
                    {
                        'dataType': 'text',
                        'inform': '',
                        'validType': 'other'
                    }
                ],
                'hidden': false,
                'type': 'input',
                'tittle': '姓名:'
            },
            {
                'id': '1.2.2',
                'content': [
                    {
                        'dataType': 'text',
                        'inform': '',
                        'validType': 'other'
                    }
                ],
                'hidden': false,
                'type': 'input',
                'tittle': '你所在单位的名称:'
            },
            {
                'id': '1.3',
                'content': [
                    '男',
                    '女'
                ],
                'hidden': false,
                'type': 'radio',
                'tittle': '性别'
            },
            {
                'id': '1.4',
                'hidden': false,
                'type': 'date',
                'tittle': '出生日期(可以直接输入，格式20xx-xx-xx）'
            },
            {
                'id': '1.5',
                'content': [
                    {
                        'dataType': 'text',
                        'inform': '',
                        'validType': 'idc'
                    }
                ],
                'hidden': false,
                'type': 'idc',
                'tittle': '身份证号码（必填）：'
            },
            {
                'id': '1.5.1',
                'content': [
                    {
                        'dataType': 'text',
                        'inform': '',
                        'validType': 'other'
                    }
                ],
                'hidden': false,
                'type': 'input',
                'tittle': '医保编号（必填）：'
            },
            {
                'id': '1.5.2',
                'content': [
                    '城镇职工医疗保险',
                    '商业医疗保险',
                    '城镇居民医疗保险',
                    '公费医疗',
                    '新型农村合作医疗保险',
                    '其他 ->转至问题1.5.2.a'
                ],
                'hiddenlist': [
                    ['1.5.2.a'],
                    ['1.5.2.a'],
                    ['1.5.2.a'],
                    ['1.5.2.a'],
                    ['1.5.2.a'],
                    [],
                ],
                'hidden': false,
                'type': 'radio',
                'tittle': '医保类型'

            },
            {
                'id': '1.5.2.a',
                'content': [
                    {
                        'dataType': 'text',
                        'inform': '',
                        'validType': 'other'
                    }
                ],
                'hidden': false,
                'type': 'input',
                'tittle': '如果选择其他医疗保险，那么是？'
            },
            {
                'id': '1.6',
                'content': [
                    {
                        'dataType': 'text',
                        'inform': '',
                        'validType': 'other'
                    }
                ],
                'hidden': false,
                'type': 'input',
                'tittle': '家庭住址（为便于今后长期随访，请详细填写）：'
            },
            {
                'id': '1.6.1',
                'content': [
                    {
                        'dataType': 'text',
                        'inform': '',
                        'validType': 'other'
                    }
                ],
                'hidden': false,
                'type': 'input',
                'tittle': '居委会/村委会/村医电话'
            },
            {
                'id': '1.7.1',
                'content': [
                    {
                        'dataType': 'text',
                        'inform': '',
                        'validType': 'phone'
                    }
                ],
                'hidden': false,
                'type': 'phone',
                'tittle': '手机号码'
            },
            {
                'id': '1.7.2',
                'content': [
                    {
                        'dataType': 'text',
                        'inform': '',
                        'validType': 'phone'
                    }
                ],
                'hidden': false,
                'type': 'phone',
                'tittle': '重要联系人的手机号码:'
            },
            {
                'id': '1.8',
                'content': [
                    '汉族',
                    '回族',
                    '维族',
                    '哈萨克',
                    '蒙古',
                    '藏族',
                    '其他 ->转至问题1.8.a'
                ],
                'hiddenlist': [
                    ['1.8.a'],
                    ['1.8.a'],
                    ['1.8.a'],
                    ['1.8.a'],
                    ['1.8.a'],
                    ['1.8.a'],
                    [],
                ],
                'hidden': false,
                'type': 'radio',
                'tittle': '你的民族'
            },
            {
                'id': '1.8.a',
                'content': [
                    {
                        'dataType': 'text',
                        'inform': '',
                        'validType': 'other'
                    }
                ],
                'hidden': false,
                'type': 'input',
                'tittle': '如果选择其他民族，具体是？'
            },
            {
                'id': '1.9',
                'content': [
                    '是 ->转至问题1.9.a',
                    '不想回答',
                    '否'
                ],
                'hiddenlist': [
                    [],
                    ['1.9.a', '1.9.b', '1.9.c', '1.9.c.1.a', '1.9.c.1.b'],
                    ['1.9.a', '1.9.b', '1.9.c', '1.9.c.1.a', '1.9.c.1.b']
                ],
                'hidden': false,
                'type': 'radio',
                'tittle': '你是否有任何宗教信仰？'
            },
            {
                'id': '1.9.a',
                'content': [
                    '伊斯兰教',
                    '佛教',
                    '基督教',
                    '其他 ->转至问题1.9.b'
                ],
                'hiddenlist': [
                    ['1.9.b'],
                    ['1.9.b', '1.9.c', '1.9.c.1.a', '1.9.c.1.b'],
                    ['1.9.b', '1.9.c', '1.9.c.1.a', '1.9.c.1.b'],
                    ['1.9.c', '1.9.c.1.a', '1.9.c.1.b'],
                ],
                'hidden': false,
                'type': 'radio',
                'tittle': '如果有宗教信仰，具体宗教是？'
            },
            {
                'id': '1.9.b',
                'content': [
                    {
                        'dataType': 'text',
                        'inform': '',
                        'validType': 'other'
                    }
                ],
                'hidden': false,
                'type': 'input',
                'tittle': '如果信仰其他宗教，具体是？'
            },
            {
                'id': '1.9.1',
                'content': [
                    '是',
                    '否'
                ],
                'hiddenlist': [
                    [],
                    ['1.9.c.1.a', '1.9.c.1.b']
                ],
                'hidden': false,
                'type': 'radio',
                'tittle': '你是否封斋？'
            },
            {
                'id': '1.9.1.a',
                'content': [
                    {
                        'dataType': 'text',
                        'inform': '',
                        'validType': 'twonum'
                    }
                ],
                'hidden': false,
                'type': 'input',
                'tittle': '你从几岁开始封斋？'
            },
            {
                'id': '1.9.1.b',
                'content': [
                    {
                        'dataType': 'text',
                        'inform': '',
                        'validType': 'twonum'
                    }
                ],
                'hidden': false,
                'type': 'input',
                'tittle': '封斋多少年？'
            },
            {
                'id': '1.10',
                'content': [
                    '未正规上过学',
                    '小学',
                    '初中',
                    '高中（包括中专、技校）',
                    '大专',
                    '大学',
                    '研究生以上'
                ],
                'hidden': false,
                'type': 'radio',
                'tittle': '你所接受过的最高教育是什么？'
            },
            {
                'id': '1.11',
                'content': [
                    {
                        'dataType': 'text',
                        'inform': '',
                        'validType': 'twonum'
                    }
                ],
                'hidden': false,
                'type': 'input',
                'tittle': '包括你自己在内，你全家一共几口人共同生活在一起?(共同生活指长期共同吃住在一起，经济共担)'
            },
            {
                'id': '1.12',
                'content': [
                    '已婚',
                    '丧偶',
                    '分居/离婚',
                    '未婚'
                ],
                'hidden': false,
                'type': 'radio',
                'tittle': '你目前的婚姻状况如何？'
            },
            {
                'id': '1.13',
                'content': [
                    '农林牧渔劳动者',
                    '工人',
                    '行政及管理人员',
                    '专业技术人员（医生、教师、科技人员）',
                    '销售及服务工作人员',
                    '家务',
                    '私营业主',
                    '待业/下岗',
                    '其它或不易分类者'
                ],
                'hidden': false,
                'hiddenlist': [
                    ['8.1', '8.2', '8.3'],
                    [],
                    [],
                    [],
                    [],
                    [],
                    [],
                    [],
                    []
                ],
                'type': 'radio',
                'tittle': '你目前所从事的主要是哪方面的职业？'
            },
            {
                'id': '1.14',
                'content': [
                    '<  2500元',
                    '2,500-4,999元',
                    '5,000-9,999元',
                    '10,000-19,999元',
                    '20,000-34,999元',
                    '35,000-49,999元',
                    '50,000-74,999元',
                    '75,000-99,999元',
                    '100,000-200,000元',
                    '≥200,000元',
                    '不清楚'
                ],
                'hidden': false,
                'type': 'radio',
                'tittle': '去年你全家一年的总收入（包含各种来源）约为多少？'
            },
            {
                'id': '1.15',
                'content': [
                    {
                        'dataType': 'text',
                        'inform': '',
                        'validType': 'fivenum'
                    }
                ],
                'hidden': false,
                'type': 'input',
                'tittle': '去年你全家平均一个月的日常支出（不含特殊支出如买房买车住院等）约为：'
            },
            {
                'id': '1.16',
                'content': [
                    '自来水',
                    '井水',
                    '江河水',
                    '塘堰水',
                    '窖水',
                    '桶装纯净水',
                    '其它'
                ],
                'hiddenlist': [
                    ['1.16.a'],
                    ['1.16.a'],
                    ['1.16.a'],
                    ['1.16.a'],
                    ['1.16.a'],
                    ['1.16.a'],
                    []
                ],
                'hidden': false,
                'type': 'radio',
                'tittle': '你家饮水来自？'
            },
            {
                'id': '1.16.a',
                'content': [
                    {
                        'dataType': 'text',
                        'inform': '',
                        'validType': 'other'
                    }
                ],
                'hidden': false,
                'type': 'input',
                'tittle': '如果你选择了其它，那么是什么类型的水：'
            },
            {
                'id': '1.17',
                'content': [
                    '自家楼房（农村）/五年内新装修单元房（城市）',
                    '带抽水马桶的家庭独立卫生间',
                    '汽车',
                    '摩托车/其他机动车（如电动车、拖拉机）',
                    '电脑',
                    '互联网',
                    '智能手机（如微信、QQ等，针对调查对象本人）',
                    '五年内曾自费外出旅游度假'
                ],
                'hidden': false,
                'type': 'checkbox',
                'tittle': '你或家人目前是否有以下财产和消费？'
            }
        ],
        [
            {
                'id': '2.1',
                'content': [
                    '从不或几乎从不喝茶',
                    '只在特殊场合下（如节假日或做客时）偶尔喝',
                    '一年当中只在特殊季节喝(如农忙或夏季)',
                    '一年当中不分季节，每个月都喝，但频度不到每周一次',
                    '一年当中不分季节，基本上每周都饮 ->转至问题2.3'
                ],
                'hiddenlist': [
                    [ '2.3', '2.4', '2.5', '2.5.a', '2.6', '2.7'],
                    [ '2.3', '2.4', '2.5', '2.5.a', '2.6', '2.7'],
                    [ '2.3', '2.4', '2.5', '2.5.a', '2.6', '2.7'],
                    [ '2.3', '2.4', '2.5', '2.5.a', '2.6', '2.7'],
                    [ '2.2', '2.2.a'],
                ],
                'hidden': false,
                'type': 'radio',
                'tittle': '在过去一年时间里，你大概多长时间喝一次茶？'
            },
            {
                'id': '2.2',
                'content': [
                    '有 ->转至问题2.2.a',
                    '无'
                ],
                'hiddenlist': [
                    [],
                    ['2.2.a'],
                ],
                'hidden': false,
                'type': 'radio',
                'tittle': '请回忆一下，你以前是否曾经有过每周都喝茶并且至少持续一年时间的经历？'
            },
            {
                'id': '2.2.a',
                'content': [
                    {
                        'dataType': 'text',
                        'inform': '',
                        'validType': 'twonum'
                    }
                ],
                'hidden': false,
                'type': 'input',
                'tittle': '若有，那停止喝茶大概是在多少年以前？（单位：年）'
            },
            {
                'id': '2.3',
                'content': [
                    '1-2 天/周',
                    '3-5天/周',
                    '每天或几乎每天都喝'
                ],
                'hidden': false,
                'type': 'radio',
                'tittle': '在过去一年时间里，你平均每周有几天喝茶？'
            },
            {
                'id': '2.4',
                'content': [
                    {
                        'dataType': 'text',
                        'inform': '',
                        'validType': 'twonum'
                    }
                ],
                'hidden': false,
                'type': 'input',
                'tittle': '你大约从几岁开始养成每周喝茶的习惯？（单位：岁）'
            },
            {
                'id': '2.5',
                'content': [
                    '绿茶（包括花茶）',
                    '乌龙茶/铁观音',
                    '红茶（如滇红、祁红）',
                    '其它（如普洱、砖茶）'
                ],
                'hidden': false,
                'type': 'radio',
                'tittle': '当你喝茶时，最常喝哪种茶？（请选择最常用的一种茶）'
            },
            {
                'id': '2.5.a',
                'content': [
                    {
                        'dataType': 'text',
                        'inform': '',
                        'validType': 'twonum'
                    }
                ],
                'hidden': false,
                'type': 'input',
                'tittle': '一般一天喝几杯？（按250ml纸杯计量，单位 杯/天）'
            },
            {
                'id': '2.6',
                'content': [
                    {
                        'dataType': 'text',
                        'inform': '',
                        'validType': 'twonum'
                    }
                ],
                'hidden': false,
                'type': 'input',
                'tittle': '当你喝茶时，通常一天的茶叶量大约是多少克？（单位：克/天）'
            },
            {
                'id': '2.7',
                'content': [
                    '淡茶',
                    '适度',
                    '浓茶'
                ],
                'hidden': false,
                'type': 'radio',
                'tittle': '你通常是喜欢喝清淡的茶还是浓茶？'
            },
            {
                'id': '2.8',
                'content': [
                    '从不或者几乎不喝咖啡  ->转至问题3.1',
                    '只在特殊情况（如节假日或做客时）偶尔喝  ->转至问题3.1',
                    '每月都喝，但频度不到每周一次  ->转至问题3.1',
                    '基本上每周都喝'
                ],
                'hiddenlist': [
                    ['2.9', '2.10', '2.11', '2.11.a'],
                    ['2.9', '2.10', '2.11', '2.11.a'],
                    ['2.9', '2.10', '2.11', '2.11.a'],
                    []
                ],
                'hidden': false,
                'type': 'radio',
                'tittle': '在过去一年里，你大概多长时间喝一次咖啡？'
            },
            {
                'id': '2.9',
                'content': [
                    '1-2天/周',
                    '3-5天/周',
                    '每天或几乎每天都喝'
                ],
                'hidden': false,
                'type': 'radio',
                'tittle': '在过去一年里，你平均每周有几天喝咖啡？'
            },
            {
                'id': '2.10',
                'content': [
                    {
                        'dataType': 'text',
                        'inform': '',
                        'validType': 'twonum'
                    }
                ],
                'hidden': false,
                'type': 'input',
                'tittle': '你大约从多大年龄开始养成每周都喝咖啡的习惯？（单位： 岁）'
            },
            {
                'id': '2.11',
                'content': [
                    '纯咖啡',
                    '速溶咖啡（含糖、植脂末）',
                    '咖啡加牛奶',
                    '咖啡加糖'
                ],
                'hidden': false,
                'type': 'radio',
                'tittle': '你最常喝哪种咖啡？（请选择最常用的一种回答）'
            },
            {
                'id': '2.11.a',
                'content': [
                    {
                        'dataType': 'text',
                        'inform': '',
                        'validType': 'twonum'
                    }
                ],
                'hidden': false,
                'type': 'input',
                'tittle': '一般一天喝几杯？（单位：杯/天 ，按250ml纸杯计量）'
            }
        ],
        [
            {
                'id': '3.1',
                'content': [
                    '从不或者几乎不饮酒',
                    '只在特殊场合下（如喜庆或节假日）偶尔喝',
                    '一年当中只在特定的几个月喝（如农忙或夏季），而其他季节一般不喝',
                    '一年当中不分季节，每个月都喝，但频度不到每周一次',
                    '一年当中不分季节，基本上每周至少喝一次酒  ->转至问题3.3'
                ],
                'hiddenlist': [
                    ['3.3', '3.4', '3.5'],
                    ['3.3', '3.4', '3.5'],
                    ['3.3', '3.4', '3.5'],
                    ['3.3', '3.4', '3.5'],
                    ['3.2', '3.2.a', '3.2.b', '3.2.c'],
                ],
                'hidden': false,
                'type': 'radio',
                'tittle': '在过去的一年里，你大概多长时间喝一次酒？'
            },
            {
                'id': '3.2',
                'content': [
                    '是 ->转至问题3.2.a',
                    '否 ->转至问卷第四部分'
                ],
                'hiddenlist': [
                    ['3.3', '3.4', '3.5'],
                    ['3.2.a', '3.2.b', '3.2.c', '3.3', '3.4', '3.5'],
                ],
                'hidden': false,
                'type': 'radio',
                'tittle': '请回忆一下，你以前是否曾经有过每周都喝酒并且至少持续一年时间的经历？'
            },
            {
                'id': '3.2.a',
                'content': [
                    {
                        'dataType': 'text',
                        'inform': '',
                        'validType': 'twonum'
                    }
                ],
                'hidden': false,
                'type': 'input',
                'tittle': '若是，那停止饮酒大概在多少年以前？（单位：年）'
            },
            {
                'id': '3.2.b',
                'content': [
                    '患病',
                    '担心饮酒影响健康（尚未患病）',
                    '经济负担过重',
                    '家人反对',
                    '医生建议',
                    '其他 ->转至问题3.2.c'
                ],
                'hiddenlist': [
                    ['3.2.c'],
                    ['3.2.c'],
                    ['3.2.c'],
                    ['3.2.c'],
                    ['3.2.c'],
                    ['3.2.c'],
                    []
                ],
                'hidden': false,
                'type': 'radio',
                'tittle': '你停止饮酒的主要原因是什么？ ->转至问卷第四部分'
            },
            {
                'id': '3.2.c',
                'content': [
                    {
                        'dataType': 'text',
                        'inform': '',
                        'validType': 'other'
                    }
                ],
                'hidden': false,
                'type': 'input',
                'tittle': '选择其他，具体原因是？'
            },
            {
                'id': '3.3',
                'content': [
                    '1-2天/周',
                    '3-5天/周',
                    '每天或几乎每天都饮'
                ],
                'hidden': false,
                'type': 'radio',
                'tittle': '在过去一年里，你平均每周大约有几天喝酒？'
            },
            {
                'id': '3.4',
                'content': [
                    {
                        'dataType': 'text',
                        'inform': '',
                        'validType': 'twonum'
                    }
                ],
                'hidden': false,
                'type': 'input',
                'tittle': '你大约从几岁开始养成每周都喝酒的习惯？（单位： 岁）'
            },
            {
                'id': '3.5',
                'type': 'table35',
                'hidden': false
            }
        ],
        [
            {
                'id': '4.1',
                'content': [
                    '不吸烟->转至问题4.2',
                    '偶尔吸->转至问题4.2',
                    '大部分天数吸->转至问题4.5',
                    '每天都吸->转至问题4.5'
                ],
                'hiddenlist': [
                    [],
                    [],
                    ['4.2', '4.3', '4.4', '4.4.a'],
                    ['4.2', '4.3', '4.4', '4.4.a'],
                ],
                'hidden': false,
                'type': 'radio',
                'tittle': '你现在多长时间抽一次烟？'
            },
            {
                'id': '4.2',
                'content': [
                    '从不吸->转至问题5.1',
                    '偶尔吸->转至问题5.1',
                    '曾经大部分天数吸',
                    '曾经每天都吸'
                ],
                'hiddenlist': [
                    ['4.3', '4.4', '4.4.a', '4.5', '4.6', '4.7', '4.8', '4.9', '4.10'],
                    ['4.3', '4.4', '4.4.a', '4.5', '4.6', '4.7', '4.8', '4.9', '4.10'],
                    [],
                    []
                ],
                'hidden': false,
                'type': 'radio',
                'tittle': '在以前，你通常多久吸一次烟？'
            },
            {
                'id': '4.3',
                'content': [
                    {
                        'dataType': 'text',
                        'inform': '',
                        'validType': 'threenum'
                    }
                ],
                'hidden': false,
                'type': 'year-input',
                'tittle': '若你过去曾吸烟现在已不吸，那你戒烟有多久了？（单位：月）'
            },
            {
                'id': '4.4',
                'content': [
                    '因为所患疾病',
                    '担心吸烟影响今后的健康（尚未患病）',
                    '经济负担过重',
                    '家人反对',
                    '医生建议',
                    '其他'
                ],
                'hidden': false,
                'hiddenlist': [
                    ['4.4.a'],
                    ['4.4.a'],
                    ['4.4.a'],
                    ['4.4.a'],
                    ['4.4.a'],
                    [ ]
                ],
                'type': 'radio',
                'tittle': '促使你戒烟的一个最主要的原因是什么？'
            },
            {
                'id': '4.4.a',
                'content': [
                    {
                        'dataType': 'text',
                        'inform': '',
                        'validType': 'other'
                    }
                ],
                'hidden': false,
                'type': 'input',
                'tittle': '其它:'
            },
            {
                'id': '4.5',
                'content': [
                    {
                        'dataType': 'text',
                        'inform': '',
                        'validType': 'twonum'
                    }
                ],
                'hidden': false,
                'type': 'input',
                'tittle': '你大约从几岁开始养成每天或基本上每天都吸烟的习惯？（单位：岁）'
            },
            {
                'id': '4.6',
                'type': 'table46',
                'hidden': false
            },
            {
                'id': '4.7',
                'content': [
                    '吸到口腔后即吐出',
                    '吸到咽喉部',
                    '深吸到肺部'
                ],
                'hidden': false,
                'type': 'radio',
                'tittle': '你吸烟时通常将烟吸入到体内什么部位？'
            },
            {
                'id': '4.8',
                'content': [
                    '是',
                    '否 -> 请转至问卷第五部分'
                ],
                'hiddenlist': [
                    [],
                    ['4.9', '4.10']
                ],
                'hidden': false,
                'type': 'radio',
                'tittle': '你是否曾经尝试过戒烟（需至少坚持1周才算）？'
            },
            {
                'id': '4.9',
                'content': [
                    {
                        'dataType': 'text',
                        'inform': '',
                        'validType': 'threenum'
                    }
                ],
                'hidden': false,
                'type': 'year-input',
                'tittle': '你最近一次尝试戒烟是在多少个月以前？'
            },
            {
                'id': '4.10',
                'content': [
                    {
                        'dataType': 'text',
                        'inform': '',
                        'validType': 'threenum'
                    }
                ],
                'hidden': false,
                'type': 'year-input',
                'tittle': '你最近一次尝试戒烟时，坚持了多长时间未吸烟？'
            }
        ],
        [
            {
                'id': '5.1',
                'type': 'table51',
                'hidden': false
            },
            {
                'id': '5.2',
                'content': [
                    '口味很清淡',
                    '不咸不淡',
                    '口味偏咸'
                ],
                'hidden': false,
                'type': 'radio',
                'tittle': '与你的朋友或者同事相比，你所喜欢的口味如何？'
            },
            {
                'id': '5.3.1.a',
                'content': [
                    '500克',
                    '400克',
                    '250克',
                    '200克',
                    '100克'
                ],
                'hidden': false,
                'type': 'radio',
                'tittle': '最常用的一包盐的重量是？'
            },
            {
                'id': '5.3',
                'type': 'table53',
                'hidden': false
            },
            {
                'id': '5.4',
                'type': 'table54',
                'hidden': false
            },
            {
                'id': '5.5',
                'content': [
                    '鱼肝油/鱼油',
                    '维生素',
                    '钙/铁/锌片',
                    '人参类',
                    '其他保健补品'
                ],
                'hidden': false,
                'type': 'checkbox',
                'tittle': '在过去一年里，你是否服用过下述营养品并且持续服用时间至少达到一个月？'
            },
            {
                'id': '5.6',
                'content': [
                    {
                        'dataType': 'text',
                        'inform': '',
                        'validType': 'twonum'
                    }
                ],
                'hidden': false,
                'type': 'input',
                'tittle': '到目前为止你使用冰箱一共有多少年了（单位：年，若无则请填写0）？'
            },
            {
                'id': '5.7',
                'content': [
                    '从不/几乎从不吃辣 ->转至问题5.10',
                    '偶尔吃，但不到每周一次 ->转至问题5.10',
                    '每周1-2次',
                    '每周3-5次',
                    '每天或几乎每天都吃'
                ],
                'hiddenlist': [
                    ['5.8', '5.9'],
                    ['5.8', '5.9'],
                    [],
                    [],
                    []
                ],
                'hidden': false,
                'type': 'radio',
                'tittle': '在过去一年里，你大概多久吃一次辣食？'
            },
            {
                'id': '5.8',
                'content': [
                    {
                        'dataType': 'text',
                        'inform': '',
                        'validType': 'twonum'
                    }
                ],
                'hidden': false,
                'type': 'input',
                'tittle': '你大约从几岁开始养成每周吃辣食的习惯？（单位：岁）'
            },
            {
                'id': '5.9',
                'content': [
                    '微辣',
                    '较辣',
                    '极辣'
                ],
                'hidden': false,
                'type': 'radio',
                'tittle': '你通常喜欢吃多辣的食物？'
            },
            {
                'id': '5.10',
                'content': [
                    '从不/几乎从不吃醋',
                    '偶尔吃，但不到每周一次',
                    '每周1-2次',
                    '每周3-5次',
                    '每天或几乎每天都吃'
                ],
                'hidden': false,
                'hiddenlist': [
                    ['5.11', '5.12', '5.13'],
                    [],
                    [],
                    [],
                    []
                ],
                'type': 'radio',
                'tittle': '在过去一年里，你吃饭时食醋的频率大概是多久一次？'
            },
            {
                'id': '5.11',
                'content': [
                    {
                        'dataType': 'text',
                        'inform': '',
                        'validType': 'twonum'
                    }
                ],
                'hidden': false,
                'type': 'input',
                'tittle': '你的食醋习惯大约是从几岁开始养成的？（单位：岁）'
            },
            {
                'id': '5.12',
                'content': [
                    '特别喜欢，量大',
                    '比较喜欢，量中等',
                    '一般，量少',
                    '反感，不吃'
                ],
                'hidden': false,
                'type': 'radio',
                'tittle': '你认为自己对醋的偏好程度是怎样的？'
            },
            {
                'id': '5.13',
                'content': [
                    {
                        'dataType': 'text',
                        'inform': '',
                        'validType': 'twonum'
                    }
                ],
                'hidden': false,
                'type': 'input',
                'tittle': '你家一瓶醋(500毫升)大约可以使用多久？（单位:天）'
            }
        ],
        [
            {
                'id': '6.1',
                'content': [
                    '从未有或几乎没有 ->转至问题6.3',
                    '偶尔有，平均每周不到1天 ->转至问题6.3',
                    '1-2次每周',
                    '3-5次每周',
                    '每天或几乎每天都有'
                ],
                'hiddenlist': [
                    ['6.2'],
                    ['6.2'],
                    [],
                    [],
                    [],

                ],
                'hidden': false,
                'type': 'radio',
                'tittle': '在过去的一年里，你每周通常有多少天会在家里吸入同住者的二手烟？（指每次至少持续5分钟）'
            },
            {
                'id': '6.2',
                'content': [
                    {
                        'dataType': 'text',
                        'inform': '',
                        'validType': 'twonum'
                    }
                ],
                'hidden': false,
                'type': 'input',
                'tittle': '通常情况下，你每周吸入同住者二手烟的时间累计有多长？（单位：小时/周）'
            },
            {
                'id': '6.3',
                'content': [
                    '从未有或几乎没有  ->转至问题6.5',
                    '偶尔有，平均每周不到1天  ->转至问题6.5',
                    '1-2次每周',
                    '3-5次每周',
                    '每天或几乎每天都有'
                ],
                'hiddenlist': [
                    ['6.4'],
                    ['6.4'],
                    [],
                    [],
                    []
                ],
                'hidden': false,
                'type': 'radio',
                'tittle': '在过去的一年里，你每周通常有多少天会在工作或公共场所吸入其他吸烟者的二手烟？（指每次至少持续5分钟）'
            },
            {
                'id': '6.4',
                'content': [
                    {
                        'dataType': 'text',
                        'inform': '',
                        'validType': 'twonum'
                    }
                ],
                'hidden': false,
                'type': 'input',
                'tittle': '通常情况下，你每周在工作或公共场所吸入二手烟的时间累计有多长？（单位：小时/周）'
            },
            {
                'id': '6.5',
                'content': [
                    '是',
                    '否'
                ],
                'hidden': false,
                'type': 'radio',
                'tittle': '在你所居住的10公里范围内，是否有空气污染严重（如烟雾、煤气、粉尘）的工厂？'
            },
            {
                'id': '6.6',
                'content': [
                    '每天/几乎每天都做',
                    '平均每周做几次',
                    '平均每月做几次',
                    '不做/极少做 ->转至问题6.10',
                    '无厨房设施 ->转至问题6.10'
                ],
                'hiddenlist': [
                    [],
                    [],
                    [],
                    ['6.7', '6.8', '6.8.1', '6.8.1.a', '6.9', '6.9.a', '6.9.b', '6.9.c', '6.9.d'],
                    ['6.7', '6.8', '6.8.1', '6.8.1.a', '6.9', '6.9.a', '6.9.b', '6.9.c', '6.9.d'],
                ],
                'hidden': false,
                'type': 'radio',
                'tittle': '在过去一年里，你多久在家做一次饭？'
            },
            {
                'id': '6.7',
                'content': [
                    {
                        'dataType': 'text',
                        'inform': '',
                        'validType': 'twonum'
                    }
                ],
                'hidden': false,
                'type': 'input',
                'tittle': '你每周做饭时，大概累积有多长时间花在炉灶前？（单位：小时/周）'
            },
            {
                'id': '6.8',
                'content': [
                    '煤气/天然气',
                    '煤（请回答问题6.8.1）',
                    '柴/炭',
                    '电（包括微波炉/电磁炉）',
                    '其他油'
                ],
                'hiddenlist': [
                    ['6.8.1', '6.8.1.a'],
                    [],
                    ['6.8.1', '6.8.1.a'],
                    ['6.8.1', '6.8.1.a'],
                    ['6.8.1', '6.8.1.a'],

                ],
                'hidden': false,
                'type': 'radio',
                'tittle': '现在你家里做饭或烧水时，通常用哪一种燃料？'
            },
            {
                'id': '6.8.1',
                'content': [
                    '无烟煤',
                    '有烟煤',
                    '煤球/煤饼（无烟）',
                    '其它（6.8.1.a）'
                ],
                'hiddenlist': [
                    ['6.8.1.a'],
                    ['6.8.1.a'],
                    ['6.8.1.a'],
                    [],
                ],
                'hidden': false,
                'type': 'radio',
                'tittle': '请说明具体所使用煤制品的种类？'
            },
            {
                'id': '6.8.1.a',
                'content': [
                    {
                        'dataType': 'text',
                        'inform': '',
                        'validType': 'other'
                    }
                ],
                'hidden': false,
                'type': 'input',
                'tittle': '如果是其它类型的煤制品，那么是什么？（单位：岁）'
            },
            {
                'id': '6.9',
                'content': [
                    '排气扇',
                    '抽油烟机',
                    '烟囱-->转至6.9.c',
                    '无任何设备或措施-->转至6.9.c'
                ],
                'hiddenlist': [
                    [],
                    [],
                    ['6.9.a', '6.9.b'],
                    ['6.9.a', '6.9.b'],
                ],
                'hidden': false,
                'type': 'radio',
                'tittle': '在你家里厨房的排烟设备是？'
            },
            {
                'id': '6.9.a',
                'content': [
                    '是',
                    '否'
                ],
                'hidden': false,
                'type': 'radio',
                'tittle': '做饭时是否使用这些排烟设备？'
            },
            {
                'id': '6.9.b',
                'content': [
                    '点炉前启用',
                    '点炉后启用',
                    '油烟重时启用'
                ],
                'hidden': false,
                'type': 'radio',
                'tittle': '使用方式：'
            },
            {
                'id': '6.9.c',
                'content': [
                    '是，一直有',
                    '是，有时有',
                    '从无 -->转到问题6.10'
                ],
                'hiddenlist': [
                    [],
                    [],
                    ['6.9.d'],
                ],
                'hidden': false,
                'type': 'radio',
                'tittle': '除了做饭和烧水外，你家平时（尤其在冬天）是否有炉子全天不熄火？'
            },
            {
                'id': '6.9.d',
                'content': [
                    '屋内',
                    '屋外（如公共厨房，门外等）'
                ],
                'hidden': false,
                'type': 'radio',
                'tittle': '平时家里不熄火的炉子，一般放在什么地方？'
            },
            {
                'id': '6.10',
                'content': [
                    '是',
                    '否-->转至问题6.11'
                ],
                'hiddenlist': [
                    [],
                    ['6.10.a', '6.10.b']
                ],
                'hidden': false,
                'type': 'radio',
                'tittle': '在你现居所，冬天屋内是否取暖？'
            },
            {
                'id': '6.10.a',
                'content': [
                    '集中供暖-->转至问题6.11',
                    '煤气/天然气-->转至问题6.11',
                    '无烟煤',
                    '有烟煤',
                    '煤球/煤饼（无烟）',
                    '柴/炭-->转至问题6.11',
                    '电-->转至问题6.11',
                    '其它燃料（如沼气等）-->转至问题6.11'
                ],
                'hiddenlist': [
                    ['6.10.b'],
                    ['6.10.b'],
                    [],
                    [],
                    [],
                    ['6.10.b'],
                    ['6.10.b'],
                    ['6.10.b']
                ],
                'hidden': false,
                'type': 'radio',
                'tittle': '你家冬天取暖一般用什么燃料？'
            },
            {
                'id': '6.10.b',
                'content': [
                    '有',
                    '无'
                ],
                'hidden': false,
                'type': 'radio',
                'tittle': '你家的取暖设施有无连接到室外的烟囱/烟管？'
            },
            {
                'id': '6.11',
                'content': [
                    '<半年',
                    '半年-1年',
                    '1-3年',
                    '3-5年',
                    '5-10年',
                    '10年及以上'
                ],
                'hidden': false,
                'type': 'radio',
                'tittle': '你现在所住房子最近一次装修距现在有多长时间了？'
            },
            {
                'id': '6.12',
                'content': [
                    '从未有过-->请转至问题6.14',
                    '从儿童时期开始',
                    '从其它时期开始-->6.12.a'
                ],
                'hiddenlist': [
                    ['6.12.a', '6.13', '6.13.a'],
                    ['6.12.a'],
                    []
                ],
                'hidden': false,
                'type': 'radio',
                'tittle': '请回忆一下，从何时开始你家屋内（尤其在冬天）出现燃煤污染？'
            },
            {
                'id': '6.12.a',
                'content': [
                    {
                        'dataType': 'text',
                        'inform': '',
                        'validType': 'other'
                    }
                ],

                'hidden': false,
                'type': 'input',
                'tittle': '从哪一年开始出现？'
            },
            {
                'id': '6.13',
                'content': [
                    '从______年起，不再出现 ->转至6.13.a填写具体时间',
                    '目前仍有'
                ],
                'hiddenlist': [
                    [],
                    ['6.13.a']
                ],
                'hidden': false,
                'type': 'radio',
                'tittle': '从哪一年开始，你家屋内（尤其在冬天）不再出现燃煤污染？'
            },
            {
                'id': '6.13.a',
                'content': [
                    {
                        'dataType': 'text',
                        'inform': '',
                        'validType': 'other'
                    }
                ],
                'hidden': false,
                'type': 'input',
                'tittle': '燃煤污染不再出现时间'
            },
            {
                'id': '6.14',
                'type': 'table613',
                'hidden': false
            },
            {
                'id': '6.15',
                'content': [
                    '减少外出',
                    '佩戴口罩',
                    '紧闭门窗',
                    '室内开启空气净化器等设备',
                    '其他 ->转至6.14.a填写'
                ],
                'hiddenlist': [
                    ['6.15.a'],
                    ['6.15.a'],
                    ['6.15.a'],
                    ['6.15.a'],
                    []
                ],
                'hidden': false,
                'type': 'checkbox',
                'tittle': '请你回忆一下，雾霾天气时，你是否采取过防护措施（可多选）'
            },
            {
                'id': '6.15.a',
                'content': [
                    {
                        'dataType': 'text',
                        'inform': '',
                        'validType': 'other'
                    }
                ],
                'hidden': false,
                'type': 'input',
                'tittle': '其它防护措施具体是指'
            }
        ],
        [
            {
                'id': '7.1.1',
                'content': [
                    '良好',
                    '较好',
                    '一般',
                    '较差'
                ],
                'hidden': false,
                'type': 'radio',
                'tittle': '你目前的健康状况自我评价如何？'
            },
            {
                'id': '7.1.2',
                'content': [
                    '更好',
                    '相似',
                    '较差',
                    '不知道'
                ],
                'hidden': false,
                'type': 'radio',
                'tittle': '你的身体状况和同龄人相对比情况如何？'
            },
            {
                'id': '7.2.1',
                'content': [
                    '是',
                    '否',
                    '伤残到不能行走'
                ],
                'hidden': false,
                'type': 'radio',
                'tittle': '和健康的同龄人一起以正常的速度在平地行走时，你是否会感到气短?'
            },
            {
                'id': '7.2.2',
                'content': [
                    '是',
                    '否',
                    '伤残到不能行走'
                ],
                'hidden': false,
                'type': 'radio',
                'tittle': '和健康的同龄人一起以正常的速度在平地行走时，你是否因胸部不适而减速或停止行走?'
            },
            {
                'id': '7.3.1',
                'content': [
                    '否',
                    '是,持续时间<3个月',
                    '是，持续时间>=3个月'
                ],
                'hidden': false,
                'type': 'radio',
                'tittle': '在过去的一年里，你是否白天或者晚上咳嗽?'
            },
            {
                'id': '7.3.2',
                'content': [
                    '否',
                    '是,持续时间<3个月',
                    '是，持续时间>=3个月 ->转至7.3.2.a'
                ],
                'hiddenlist': [
                    ['7.3.2.a'],
                    ['7.3.2.a'],
                    []
                ],
                'hidden': false,
                'type': 'radio',
                'tittle': '在过去的一年里，你是否每天早晨睡醒后经常由肺部咳出痰液?'
            },
            {
                'id': '7.3.2.a',
                'content': [
                    {
                        'dataType': 'text',
                        'inform': '',
                        'validType': 'other'
                    }
                ],
                'hidden': false,
                'type': 'input',
                'tittle': '如果咳痰持续>=3个月，那么这种现象持续了多久？'
            },
            {
                'id': '7.3.3',
                'content': [
                    '否',
                    '是',
                    '是,但只在感冒或病毒感染时出现'
                ],
                'hidden': false,
                'type': 'radio',
                'tittle': '在过去一年里，你是否胸部有口哨音或喘气音'
            },

            {
                'id': '7.4',
                'content': [
                    {
                        'dataType': 'text',
                        'inform': '',
                        'validType': 'twonum'
                    }
                ],
                'hidden': false,
                'type': 'input',
                'tittle': '在过去一年里，你一共因病去医院看过几次门诊？（单位：次 ，如无请填0）'
            },
            {
                'id': '7.5',
                'content': [
                    {
                        'dataType': 'text',
                        'inform': '',
                        'validType': 'twonum'
                    }
                ],
                'hidden': false,
                'type': 'input',
                'tittle': '在过去一年里，你一共因病住过几次院？（单位：次 ，如无请填0）'
            },
            {
                'id': '7.6',
                'content': [
                    {
                        'dataType': 'text',
                        'inform': '',
                        'validType': 'twonum'
                    }
                ],
                'hidden': false,
                'type': 'input',
                'tittle': '到目前为止，你一共因患病等接受过多少次输血？（单位：次，如无请填0）'
            },
            {
                'id': '7.7',
                'content': [
                    {
                        'dataType': 'text',
                        'inform': '',
                        'validType': 'twonum'
                    }
                ],
                'hidden': false,
                'type': 'input',
                'tittle': '到目前为止，你一共献过几次血？（单位：次  ，如无请填0）'
            },
            {
                'id': '7.8',
                'type': 'table74',
                'hidden': false
            },
            {
                'id': '7.8.f',
                'content': [
                    '肺',
                    '食道',
                    '胃',
                    '肝',
                    '肠',
                    '乳腺',
                    '前列腺',
                    '宫颈',
                    '其他 ->转至问题7.8.g'
                ],
                'hiddenlist': [
                    ['7.8.g'],
                    ['7.8.g'],
                    ['7.8.g'],
                    ['7.8.g'],
                    ['7.8.g'],
                    ['7.8.g'],
                    ['7.8.g'],
                    ['7.8.g'],
                    []
                ],
                'hidden': false,
                'type': 'checkbox',
                'tittle': '如果有肿瘤，是以下哪个部位？'
            },
            {
                'id': '7.8.g',
                'content': [
                    {
                        'dataType': 'text',
                        'inform': '',
                        'validType': 'other'
                    }
                ],
                'hidden': false,
                'type': 'input',
                'tittle': '上题中如果肿瘤发生在其它位置，是在哪？'
            },

            {
                'id': '7.9',
                'content': [
                    '每天多于一次',
                    '基本上每天一次',
                    '基本上隔天一次',
                    '每周少于三次'
                ],
                'hidden': false,
                'type': 'radio',
                'tittle': '通常情况下，你一般多久解一次大便?'
            },
            {
                'id': '7.10',
                'content': [
                    '很少或不出血',
                    '有时出血',
                    '经常出血',
                    '极少或基本不刷牙',
                    '有全口义齿'
                ],
                'hidden': false,
                'type': 'radio',
                'tittle': '你平时刷牙时，牙龈是否经常出血？?'
            },
            {
                'id': '7.11',
                'content': [
                    {
                        'dataType': 'text',
                        'inform': '',
                        'validType': 'twonum'
                    }
                ],
                'hidden': false,
                'type': 'input',
                'tittle': '你一共有几个（有血缘关系）的亲兄弟姐妹？（不算本人，如无填0）'
            },
            {
                'id': '7.12',
                'content': [
                    {
                        'dataType': 'text',
                        'inform': '',
                        'validType': 'twonum'
                    }
                ],
                'hidden': false,
                'type': 'input',
                'tittle': '你一共有几个亲生子女？（不包括领养，如无填0）'
            },
            {
                'id': '7.13',
                'content': [
                    '是 ->转至7.13.a',
                    '否 ->转至7.13.b',
                    '不知道'
                ],
                'hiddenlist': [
                    ['7.13.b'],
                    ['7.13.a'],
                    ['7.13.a', '7.13.b']
                ],
                'hidden': false,
                'type': 'radio',
                'tittle': '你的生母是否仍在世？'
            },
            {
                'id': '7.13.a',
                'content': [
                    {
                        'dataType': 'text',
                        'inform': '',
                        'validType': 'threenum'
                    }
                ],
                'hidden': false,
                'type': 'input',
                'tittle': '你生母目前的年龄是？（单位：岁）'
            },
            {
                'id': '7.13.b',
                'content': [
                    {
                        'dataType': 'text',
                        'inform': '',
                        'validType': 'twonum'
                    }
                ],
                'hidden': false,
                'type': 'input',
                'tittle': '(如果生母已经去世）你生母去世时的年龄是？（单位：岁）'
            },
            {
                'id': '7.14',
                'content': [
                    '是 ->转至问题7.14.a',
                    '否 ->转至问题7.14.b',
                    '不知道'
                ],
                'hiddenlist': [
                    ['7.14.b'],
                    ['7.14.a'],
                    ['7.14.a', '7.14.b'],
                ],
                'hidden': false,
                'type': 'radio',
                'tittle': '你的生父是否仍在世？'
            },
            {
                'id': '7.14.a',
                'content': [
                    {
                        'dataType': 'text',
                        'inform': '',
                        'validType': 'threenum'
                    }
                ],
                'hidden': false,
                'type': 'input',
                'tittle': '你生父目前的年龄是？（单位：岁）'
            },
            {
                'id': '7.14.b',
                'content': [
                    {
                        'dataType': 'text',
                        'inform': '',
                        'validType': 'twonum'
                    }
                ],
                'hidden': false,
                'type': 'input',
                'tittle': '(如果生父已经去世）你生父去世时的年龄是？（单位：岁）'
            },
            {
                'id': '7.15',
                'type': 'table715',
                'hidden': false
            },
            {
                'id': '7.16',
                'content': [
                    '是 ->转至问题7.16.a',
                    '否'
                ],
                'hiddenlist': [
                    [],
                    ['7.16.a']
                ],
                'hidden': false,
                'type': 'radio',
                'tittle': '你是否知道你的出生体重？'
            },
            {
                'id': '7.16.a',
                'content': [
                    {
                        'dataType': 'text',
                        'inform': '',
                        'validType': 'other'
                    }
                ],
                'hidden': false,
                'type': 'input',
                'tittle': '（如果知道）你的出生体重是多少斤？（可以精确到一位小数）'
            },
            {
                'id': '7.17',
                'content': [
                    '是',
                    '否',
                    '不确定'
                ],
                'hidden': false,
                'type': 'radio',
                'tittle': '你出生时是否为早产儿？'
            },
            {
                'id': '7.18',
                'content': [
                    '是',
                    '否',
                    '不确定'
                ],
                'hidden': false,
                'type': 'radio',
                'tittle': '你出生时是经过剖腹产的吗？'
            }
        ],
        [
            {
                'id': '8.1',
                'content': [
                    '以静坐为主（如行政管理人员，秘书等）',
                    '以站立为主（如营业员，门卫等）',
                    '以一般体力活为主（常温下不太出汗如管道工、电工、木工、泥工等）',
                    '以重体力劳动为主（常温下容易出汗如装卸、采矿、炼钢等）',
                    '离退休或者家务、待业一年以上或肢体残疾无法正常劳动 -> 若选此项，转至问题8.6'
                ],
                'hiddenlist': [
                    ['8.1.o', '8.3.1', '8.3.2', '8.3.3', '8.3.4', '8.3.5', '8.2.1', '8.2.2', '8.2.3', '8.2.4' ],
                    ['8.1.o', '8.3.1', '8.3.2', '8.3.3', '8.3.4', '8.3.5', '8.2.1', '8.2.2', '8.2.3', '8.2.4' ],
                    ['8.1.o', '8.3.1', '8.3.2', '8.3.3', '8.3.4', '8.3.5', '8.2.1', '8.2.2', '8.2.3', '8.2.4' ],
                    ['8.1.o', '8.3.1', '8.3.2', '8.3.3', '8.3.4', '8.3.5', '8.2.1', '8.2.2', '8.2.3', '8.2.4' ],
                    ['8.2', '8.3', '8.1.o', '8.2.1', '8.2.2', '8.2.3', '8.2.4', '8.3.1', '8.3.2', '8.3.3', '8.3.4', '8.3.5', '8.4', '8.5']
                ],
                'hidden': false,
                'type': 'radio',
                'tittle': '在过去一年里，你上班是以静坐、站立或干体力活为主？（非农林牧渔劳动者填写）'
            },
            {
                'id': '8.2',
                'content': [
                    {
                        'dataType': 'text',
                        'inform': '',
                        'validType': 'onenum'
                    }
                ],
                'hidden': false,
                'type': 'input',
                'tittle': '你每周平均工作多少天？（非农林牧渔劳动者填写）'
            },
            {
                'id': '8.3',
                'content': [
                    {
                        'dataType': 'text',
                        'inform': '',
                        'validType': 'twonum'
                    }
                ],
                'hidden': false,
                'type': 'input',
                'tittle': '你每天平均工作多少小时？（非农林牧渔劳动者填写）'
            },
            {
                'id': '8.4',
                'content': [
                    '步行',
                    '骑摩托车',
                    '骑自行车',
                    '私家车/出租',
                    '公共交通（车、地铁、渡船）',
                    '通常在家里或在家附近上班  ->转至问题8.6'
                ],
                'hiddenlist': [
                    [],
                    [],
                    [],
                    [],
                    [],
                    ['8.5'],
                ],
                'hidden': false,
                'type': 'radio',
                'tittle': '在过去一年里，你通常采用什么方式上下班或外出干活？'
            },
            {
                'id': '8.5',
                'content': [
                    {
                        'dataType': 'text',
                        'inform': '',
                        'validType': 'threenum'
                    }
                ],
                'hidden': false,
                'type': 'input',
                'tittle': '你外出工作/干活时，每天花在路上的往返时间有多长？（单位：分钟）'
            },
            {
                'id': '8.6',
                'content': [
                    '从不或几乎从不参加  ->转问题8.9',
                    '每月1-3次  ->转问题8.9',
                    '每周1-2次',
                    '每周3-5次',
                    '每天或几乎每天都锻炼'
                ],
                'hiddenlist': [
                    ['8.7', '8.8'],
                    ['8.7', '8.8'],
                    [],
                    [],
                    [],
                ],
                'hidden': false,
                'type': 'radio',
                'tittle': '在过去一年里，你业余时间一般多长时间参加一次体育锻炼？'
            },
            {
                'id': '8.7',
                'content': [
                    '太极拳/气功/散步/瑜伽',
                    '跑步/健美操',
                    '球类运动（篮球、乒乓球、羽毛球等）',
                    '快走/扭秧歌/广场舞',
                    '游泳',
                    '其它（如爬山、跳绳、踢毽子）'
                ],
                'hidden': false,
                'type': 'radio',
                'tittle': '你最常用的锻炼方式是哪一种？'
            },
            {
                'id': '8.8',
                'content': [
                    {
                        'dataType': 'text',
                        'inform': '',
                        'validType': 'twonum'
                    }
                ],
                'hidden': false,
                'type': 'input',
                'tittle': '在过去一年里，你每周参加业余体育锻炼的累计时间有多长？（单位：小时/周）'
            },
            {
                'id': '8.9',
                'content': [
                    '从无或几乎从来没有  ->转8.11',
                    '偶尔有，但不到每周一次  ->转8.11',
                    '每周有1-2次',
                    '每周有3-5次',
                    '每天或几乎每天都有'
                ],
                'hiddenlist': [
                    ['8.10'],
                    ['8.10'],
                    [],
                    [],
                    [],
                ],
                'hidden': false,
                'type': 'radio',
                'tittle': '在过去一年里，你平均每周有几天会因锻炼/劳动等强体力活动而出汗或心跳明显加快？'
            },
            {
                'id': '8.10',
                'content': [
                    {
                        'dataType': 'text',
                        'inform': '',
                        'validType': 'twonum'
                    }
                ],
                'hidden': false,
                'type': 'input',
                'tittle': '你平均每周从事类似强体力活动的累计时间大约有多长？（单位：小时/周）'
            },
            {
                'id': '8.11',
                'content': [
                    {
                        'dataType': 'text',
                        'inform': '',
                        'validType': 'twonum'
                    }
                ],
                'hidden': false,
                'type': 'input',
                'tittle': '你平均每天做各类家务活（包括带孩子）的时间有多长？（单位：小时/天）'
            },
            {
                'id': '8.12',
                'content': [
                    {
                        'dataType': 'text',
                        'inform': '',
                        'validType': 'twonum'
                    }
                ],
                'hidden': false,
                'type': 'input',
                'tittle': '你平均每天业余时间用于坐立活动（包括看电视，手机/Pad，读书报，吃饭，聚餐，下棋，打牌，玩电子游戏，上网及编织等）的时间一共有多长？（单位：小时/天）'
            },
            {
                'id': '8.13',
                'type': 'table813',
                'hidden': false
            },
            {
                'id': '8.14',
                'content': [
                    '没有，变化不大',
                    '是，至少增加了5斤',
                    '是，至少减少5斤'
                ],
                'hidden': false,
                'type': 'radio',
                'tittle': '和以往相比，你的体重在过去一年里是否有明显的变化？'
            },
            {
                'id': '8.15',
                'content': [
                    '是',
                    '否-->转到最后一题'
                ],
                'hiddenlist': [
                    [],
                    [
                        '8.16',
                        '8.16.a',
                        '8.17',
                        '8.18'
                    ]
                ],
                'hidden': false,
                'type': 'radio',
                'tittle': '在过去一年里，你是否采取节食/服药等措施来减轻体重？'
            },
            {
                'id': '8.16',
                'content': [
                    '不吃早餐',
                    '不吃午餐',
                    '不吃晚餐',
                    '早餐时不吃/少吃主食',
                    '午餐时不吃/少吃主食',
                    '晚餐时不吃/少吃主食',
                    '减少食量',
                    '调节饮食结构',
                    '不吃肉',
                    '运动',
                    '减肥药/减肥茶',
                    '中医减肥（如针灸、按摩等）',
                    '仪器减肥',
                    '其它'
                ],
                'hiddenlist': [
                    ['8.16.a'],
                    ['8.16.a'],
                    ['8.16.a'],
                    ['8.16.a'],
                    ['8.16.a'],
                    ['8.16.a'],
                    ['8.16.a'],
                    ['8.16.a'],
                    ['8.16.a'],
                    ['8.16.a'],
                    ['8.16.a'],
                    ['8.16.a'],
                    ['8.16.a'],
                    []
                ],
                'hidden': false,
                'type': 'checkbox',
                'tittle': '如果是，你具体采取什么方式来减轻/控制体重'
            },
            {
                'id': '8.16.a',
                'content': [
                    {
                        'dataType': 'text',
                        'inform': '',
                        'validType': 'other'
                    }
                ],
                'hidden': false,
                'type': 'input',
                'tittle': '其它减轻体重的方式'
            },
            {

                'id': '8.17',
                'content': [
                    {
                        'dataType': 'text',
                        'inform': '',
                        'validType': 'other'
                    }
                ],
                'hidden': false,
                'type': 'year-input',
                'tittle': '采取以上措施，几年前开始的？'
            },
            {

                'id': '8.18',
                'content': [
                    {
                        'dataType': 'text',
                        'inform': '',
                        'validType': 'other'
                    }
                ],
                'hidden': false,
                'type': 'year-input',
                'tittle': '到目前为止，采取以上措施累计持续多长时间了？'
            },
            {
                'id': '8.19',
                'content': [
                    {
                        'dataType': 'text',
                        'inform': '',
                        'validType': 'threenum'
                    }
                ],
                'hidden': false,
                'type': 'input',
                'tittle': '你在25岁前后时，体重大约是多少斤？（如不清楚，请填写999）'
            }
        ],
        [
            {
                'id': '9.1',
                'content': [
                    {
                        'dataType': 'text',
                        'inform': '',
                        'validType': 'other'
                    }
                ],
                'hiddenlist': [
                    ['9.2', '9.2.a', '9.2.b', '9.3', '9.3.a', '9.4', '9.5.a', '9.5.b', '9.5.c', '9.5.d', '9.6']
                ],
                'hidden': false,
                'type': 'input',
                'tittle': '你第一次来月经时的实足年龄是多大？（单位：岁；若无，请填 # 并转问题9.7）'
            },
            {
                'id': '9.2',
                'content': [
                    '尚未闭经 ->转至问题9.2.a',
                    '目前正处于更年期',
                    '已完全闭经 ->转至问题9.2.b'
                ],
                'hiddenlist': [
                    ['9.2.b'],
                    ['9.2.a', '9.2.b'],
                    ['9.2.a']
                ],
                'hidden': false,
                'type': 'radio',
                'tittle': '你目前是否已完全闭经？'
            },
            {
                'id': '9.2.a',
                'content': [
                    '是',
                    '否'
                ],
                'hidden': false,
                'type': 'radio',
                'tittle': '你今天是否在月经期？'
            },
            {
                'id': '9.2.b',
                'content': [
                    {
                        'dataType': 'text',
                        'inform': '',
                        'validType': 'twonum'
                    }
                ],
                'hidden': false,
                'type': 'input',
                'tittle': '如已经闭经，闭经的年龄是？（单位：岁）'
            },
            {
                'id': '9.3',
                'content': [
                    '是 ->转至问题9.3.a',
                    '否'
                ],
                'hiddenlist': [
                    [],
                    ['9.3.a']
                ],
                'hidden': false,
                'type': 'radio',
                'tittle': '你是否用过或正在服用雌激素替代治疗药物缓解更年期症状？'
            },
            {
                'id': '9.3.a',
                'content': [
                    '雌激素替代治疗',
                    '传统中药',
                    '其他药物'
                ],
                'hidden': false,
                'type': 'checkbox',
                'tittle': '请说明药物种类？'
            },
            {
                'id': '9.4',
                'content': [
                    {
                        'dataType': 'text',
                        'inform': '',
                        'validType': 'other'
                    }
                ],
                'hiddenlist': [
                    ['9.5.a', '9.5.b', '9.5.c', '9.5.d', '9.6']
                ],
                'hidden': false,
                'type': 'input',
                'tittle': '到现在为止一共怀孕过多少次？（单位：次，若无，填 #，并转至问题9.7）'
            },
            {
                'id': '9.5.a',
                'content': [
                    {
                        'dataType': 'text',
                        'inform': '',
                        'validType': 'other'
                    }
                ],
                'hiddenlist': [
                    ['9.5.b', '9.5.c', '9.5.d', '9.6'],
                ],
                'hidden': false,
                'type': 'input',
                'tittle': '活产多少次？（单位：次，若无填#,并转9.7）'
            },
            {
                'id': '9.5.b',
                'content': [
                    {
                        'dataType': 'text',
                        'inform': '',
                        'validType': 'twonum'
                    }
                ],
                'hidden': false,
                'type': 'input',
                'tittle': '死产多少次？（单位：次，若无填0）'
            },
            {
                'id': '9.5.c',
                'content': [
                    {
                        'dataType': 'text',
                        'inform': '',
                        'validType': 'twonum'
                    }
                ],
                'hidden': false,
                'type': 'input',
                'tittle': '自然流产多少次？（单位：次，若无填0）'
            },
            {
                'id': '9.5.d',
                'content': [
                    {
                        'dataType': 'text',
                        'inform': '',
                        'validType': 'twonum'
                    }
                ],
                'hidden': false,
                'type': 'input',
                'tittle': '人工流产多少次？（单位：次，若无填0）'
            },
            {
                'id': '9.5.e',
                'content': [
                    {
                        'dataType': 'text',
                        'inform': '',
                        'validType': 'twonum'
                    }
                ],
                'hidden': false,
                'type': 'input',
                'tittle': '药物流产多少次？（单位：次，若无填0）'
            },
            {
                'id': '9.6',
                'type': 'table96',
                'hidden': false
            },
            {
                'id': '9.7',
                'content': [
                    '从未用过 ->转至问题9.10',
                    '曾经用过 ->转至问题9.7.a',
                    '目前仍用'
                ],
                'hiddenlist': [
                    ['9.7.a', '9.8', '9.10'],
                    [],
                    ['9.7.a']
                ],
                'hidden': false,
                'type': 'radio',
                'tittle': '你是否服用过口服避孕药？'
            },
            {
                'id': '9.7.a',
                'content': [
                    {
                        'dataType': 'text',
                        'inform': '',
                        'validType': 'twonum'
                    }
                ],
                'hidden': false,
                'type': 'input',
                'tittle': '你最近一次停用口服避孕药时龄是多少岁？（单位：岁）'
            },
            {
                'id': '9.8',
                'content': [
                    {
                        'dataType': 'text',
                        'inform': '',
                        'validType': 'twonum'
                    }
                ],
                'hidden': false,
                'type': 'input',
                'tittle': '你首次开始服避孕药的年龄是多大？（单位：岁）'
            },
            {
                'id': '9.9',
                'content': [
                    {
                        'dataType': 'text',
                        'inform': '',
                        'validType': 'twonum'
                    }
                ],
                'hidden': false,
                'type': 'input',
                'tittle': '到目前为止，你使用口服避孕药累积年限有多长？（单位：年）'
            },
            {
                'id': '9.10',
                'content': [
                    '从未用过 ->转至问题9.13',
                    '曾经用过 ->转至问题9.10.a',
                    '目前仍用'
                ],
                'hiddenlist': [
                    ['9.10.a', '9.11', '9.12'],
                    [],
                    ['9.10.a']
                ],
                'hidden': false,
                'type': 'radio',
                'tittle': '你是否使用过避孕环？'
            },
            {
                'id': '9.10.a',
                'content': [
                    {
                        'dataType': 'text',
                        'inform': '',
                        'validType': 'twonum'
                    }
                ],
                'hidden': false,
                'type': 'input',
                'tittle': '请说明最近一次停用时的年龄？（单位：岁）'
            },
            {
                'id': '9.11',
                'content': [
                    {
                        'dataType': 'text',
                        'inform': '',
                        'validType': 'twonum'
                    }
                ],
                'hidden': false,
                'type': 'input',
                'tittle': '你首次放置避孕环的年龄？（单位：岁）'
            },
            {
                'id': '9.12',
                'content': [
                    {
                        'dataType': 'text',
                        'inform': '',
                        'validType': 'twonum'
                    }
                ],
                'hidden': false,
                'type': 'input',
                'tittle': '到目前为止，你一共累积使用了多少年的避孕环？（单位：年）'
            },
            {
                'id': '9.13',
                'type': 'table913',
                'hidden': false
            }
        ],
        [
            {
                'id': '10.1',
                'content': [
                    '非常满意',
                    '基本满意',
                    '一般',
                    '不满意',
                    '很不满意'
                ],
                'hidden': false,
                'type': 'radio',
                'tittle': '你对目前生活状况的满意程度如何？'
            },
            {
                'id': '10.2',
                'content': [
                    '夫妻分居/离异/离婚',
                    '失业/下岗/退休',
                    '自营企业或家庭经济破产',
                    '遭到暴力打击/被强暴',
                    '严重的家庭内部矛盾或冲突',
                    '严重创伤或车祸',
                    '配偶死亡或患重病',
                    '家庭其他成员死亡或患重病',
                    '严重自然灾害（如旱、涝等）',
                    '丧失经济来源/负债度日'
                ],
                'hidden': false,
                'type': 'checkbox',
                'tittle': '请回忆一下，在过去两年里, 你是否经历过以下对你的生活有重大影响的事件?'
            },
            {
                'id': '10.3',
                'content': [
                    '通常需要半小时以上方可入睡（包括半夜醒来后）',
                    '早上很早醒来，并难以重新入睡',
                    '至少有一天需要服安眠药（西药或中药）以帮助睡眠',
                    '因睡眠不佳，白天在工作、吃饭或和别人交谈时难于保持清醒的头脑',
                    '都没有'
                ],
                'hiddenlist': [
                    [], [], [], [],
                    ['10.4']
                ],
                'hidden': false,
                'type': 'checkbox',
                'tittle': '最近一个月，你是否每周至少有三天出现下列睡眠问题？(排除外出旅游/倒时差等特殊情况）（若都没有，请转问题10.5）'
            },
            {
                'id': '10.4',
                'content': [
                    {
                        'dataType': 'text',
                        'inform': '',
                        'validType': 'twonum'
                    }
                ],
                'hidden': false,
                'type': 'input',
                'tittle': '你上面提到的睡眠问题持续有多久了？（年）'
            },
            {
                'id': '10.5',
                'content': [
                    '一年四季,经常',
                    '有，但只在某些季节',
                    '有，但不经常',
                    '没有'
                ],
                'hiddenlist': [
                    [],
                    [],
                    [],
                    ['10.6']
                ],
                'hidden': false,
                'type': 'radio',
                'tittle': '你是否有午睡的习惯？'
            },
            {
                'id': '10.6',
                'content': [
                    '半小时以内',
                    '半小时到一小时',
                    '一小时到两小时',
                    '两小时以上'
                ],
                'hidden': false,
                'type': 'radio',
                'tittle': '如果有午睡的习惯，你通常午睡多长时间？'
            },
            {
                'id': '10.7',
                'content': [
                    '是，经常有',
                    '是，有时有',
                    '否/不知道'
                ],
                'hidden': false,
                'type': 'radio',
                'tittle': '你睡觉时是否有打呼噜的习惯？'
            },

            {
                'id': '10.8',
                'content': [
                    {
                        'dataType': 'text',
                        'inform': '',
                        'validType': 'twonum'
                    }
                ],
                'hidden': false,
                'type': 'input',
                'tittle': '通常情况下，你平均每晚睡几个小时？'
            },
            {
                'id': '10.9',
                'content': [
                    '每天',
                    '每周4-6次',
                    '每周1-3次',
                    '每月1-3次',
                    '从不或极少'
                ],
                'hidden': false,
                'type': 'radio',
                'tittle': '在过去一年里，你平均多久熬一次夜（24:00以后上床睡觉）？'
            },
            {
                'id': '10.10',
                'content': [
                    '否',
                    '是  ->转至问题10.10.a'
                ],
                'hiddenlist': [
                    ['10.10.a' , '10.10.b'],
                    []
                ],
                'hidden': false,
                'type': 'radio',
                'tittle': '在你现在或前一份工作中，是否需要上夜班？'
            },
            {
                'id': '10.10.a',
                'content': [
                    {
                        'dataType': 'text',
                        'inform': '',
                        'validType': 'twonum'
                    }
                ],
                'hidden': false,
                'type': 'input',
                'tittle': '隔几天上一次夜班？ （单位：天）->转至问题10.10.b'
            },
            {
                'id': '10.10.b',
                'content': [
                    {
                        'dataType': 'text',
                        'inform': '',
                        'validType': 'twonum'
                    }
                ],
                'hidden': false,
                'type': 'input',
                'tittle': '这种情况持续了多少年？'
            },
            {
                'id': '10.11',
                'content': [
                    '总感觉心情很压抑，活得很痛苦，无论做什么事和活动都不能让自己高兴起来',
                    '对平时自己非常喜欢做的事情或者活动完全失去兴趣',
                    '因感到绝望，对平时所喜爱吃的食物完全失去食欲',
                    '总觉得自己很没用，生活中发生的所有不顺和坎坷都是自己的过错，对生活感到毫无希望'
                ],
                'hidden': false,
                'type': 'checkbox',
                'tittle': '在过去一年时间里，你是否经历过下述情况，并且持续时间至少有两周？'
            },
            {
                'id': '10.12',
                'content': [
                    '总感觉紧张不安和恐慌，整天提心吊胆害怕出事，持续时间至少有一个月，严重影响日常生活和工作',
                    '身体某部位常感到有原因不明的隐痛或不适，持续时间至少达3个月，并且影响日常生活',
                    '有原因不明的突发性的恐惧、焦虑和不适感并且机体常伴随出现心跳加快脸红等症状',
                    '在封闭的空间里（岩洞、电梯、飞机或火车等）或在人多及大庭广众下，会突然感到极度恐惧，以至于想方设法避免去上述场所'
                ],
                'hidden': false,
                'type': 'checkbox',
                'tittle': '在过去一年时间里，你是否出现过下述情况？'
            },
            {
                'id': '10.13',
                'content': [
                    '非常好',
                    '很好',
                    '好',
                    '一般',
                    '差'
                ],
                'hidden': false,
                'type': 'radio',
                'tittle': '总的来说，您认为您现在的健康状况：'
            },
            {
                'id': '10.14',
                'content': [
                    '有 ->转至问题10.15',
                    '没有 ->转至问题10.17'
                ],
                'hidden': false,
                'hiddenlist': [
                    [  ], [ '10.15', '10.16']
                ] ,
                'type': 'radio',
                'tittle': '您是否患上一些长期疾病？（注：长期疾病是指某一疾病已影响您已有一段很长的时间或您因某一疾病而有一段很长的时间已受到困扰）'
            },
            {

                'id': '10.15',
                'content': [
                    '<1年',
                    '1-5年',
                    '5-10年',
                    '>=10年'
                ],
                'hidden': false,
                'type': 'radio',
                'tittle': '您患这些长期疾病多长时间了？'
            },
            {
                'id': '10.16',
                'content': [
                    '有 ',
                    '没有 '
                ],
                'hidden': false,
                'type': 'radio',
                'tittle': '您的日常活动有没有因这些疾病而受到限制？'
            },
            {
                'id': '10.17',
                'content': [
                    '有很大限制',
                    '有一点限制',
                    '无任何限制'
                ],
                'hidden': false,
                'type': 'radio',
                'tittle': '以您目前的健康状况，是否影响中等强度的活动，如搬桌子、扫地、做操、打太极拳等？'
            },
            {
                'id': '10.18',
                'content': [
                    '有很大限制',
                    '有一点限制',
                    '无任何限制'
                ],
                'hidden': false,
                'type': 'radio',
                'tittle': '以您目前的健康状况，是否影响步行上楼梯'
            },
            {
                'id': '10.19',
                'content': [
                    '会',
                    '不会'
                ],
                'hidden': false,
                'type': 'radio',
                'tittle': '最近一个月，因为身体健康的原因，在工作或日常活动中感到力不从心？'
            },
            {
                'id': '10.20',
                'content': [
                    '会',
                    '不会'
                ],
                'hidden': false,
                'type': 'radio',
                'tittle': '最近一个月，因为身体健康的原因而令您的工作或活动受到限制？'
            },
            {
                'id': '10.21',
                'content': [
                    '会',
                    '不会'
                ],
                'hidden': false,
                'type': 'radio',
                'tittle': '最近一个月，因为情绪方面的原因（比如感到沮丧或者焦虑）而令您的工作或日常活动中感到力不从心？'
            },
            {
                'id': '10.22',
                'content': [
                    '会',
                    '不会'
                ],
                'hidden': false,
                'type': 'radio',
                'tittle': '最近一个月，因为情绪方面的原因（比如感到沮丧或者焦虑）而令您的工作或活动受到限制？'
            },
            {
                'id': '10.23',
                'content': [
                    '毫无影响',
                    '有很少影响',
                    '有一些影响',
                    '较大影响',
                    '影响非常大'
                ],
                'hidden': false,
                'type': 'radio',
                'tittle': '最近一个月，因身体上的疼痛影响您的日常工作吗（包括上班和家务劳动）？'
            },
            {
                'id': '10.24',
                'content': [
                    '常常如此',
                    '大部分时间',
                    '有时',
                    '偶尔',
                    '从来没有'
                ],
                'hidden': false,
                'type': 'radio',
                'tittle': '最近一个月，您有多少时间感到心平气和？'
            },
            {
                'id': '10.25',
                'content': [
                    '常常如此',
                    '大部分时间',
                    '有时',
                    '偶尔',
                    '从来没有'
                ],
                'hidden': false,
                'type': 'radio',
                'tittle': '最近一个月，您有多少时间感到精力充沛？'
            },
            {
                'id': '10.26',
                'content': [
                    '常常如此',
                    '大部分时间',
                    '有时',
                    '偶尔',
                    '从来没有'
                ],
                'hidden': false,
                'type': 'radio',
                'tittle': '最近一个月，您有多少时间感到心情不好，闷闷不乐？'
            },
            {
                'id': '10.27',
                'content': [
                    '常常如此',
                    '大部分时间',
                    '有时',
                    '偶尔',
                    '从来没有'
                ],
                'hidden': false,
                'type': 'radio',
                'tittle': '最近一个月，您觉得有多少时间您的身体或者情绪问题妨碍了您的社交活动（比如探亲、访友等）？'
            }
        ]
    ];
}

