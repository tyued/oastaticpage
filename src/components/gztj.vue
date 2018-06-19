<template>
  <div class="view">
        <div class="pkprocess">
            <div class="pkprocessMain">
                <div class="pkprocessLine"></div>
                <div class="pkstep complete">
                    <div class="pkstepicon pkicon-1"></div>
                    <div class="pksteptit">基础设置</div>
                </div>
                <div class="pkstep activ">
                    <div class="pkstepicon pkicon-2"></div>
                    <div class="pksteptit">规则设置</div>
                </div>
                <div class="pkstep">
                    <div class="pkstepicon pkicon-3"></div>
                    <div class="pksteptit">自动排课</div>
                </div>
                <div class="pkstep">
                    <div class="pkstepicon pkicon-4"></div>
                    <div class="pksteptit">排课调整</div>
                </div>
                <div class="pkstep">
                    <div class="pkstepicon pkicon-5"></div>
                    <div class="pksteptit">查看课表</div>
                </div>
            </div>
        </div>


        <el-tabs v-model="activeName" @tab-click="handleClick" class="mt30">

            <el-tab-pane label="课程设置" name="first">
                <el-row>
                    <el-radio-group v-model="setKc">
                        <el-radio-button label="固定排/不排设置"></el-radio-button>
                        <el-radio-button label="互斥/连排"></el-radio-button>
                        <el-radio-button label="单双周"></el-radio-button>
                    </el-radio-group>
                </el-row>


                <el-row class="mt20">
                    <div class="pkleftmenu">
                        <div class="tit">选择排课年级</div>
                        <el-tree  class='pkbjtree'
                        :data="data1"
                        node-key="id"
                        :default-expanded-keys="[2, 3]"
                        :default-checked-keys="[5]">
                        </el-tree>
                    </div>

                    <div v-show="setKc=='固定排/不排设置'" class="pkrightmenu">
                        <div class="setKCtime">
                            <div class="tit">设置课程</div>
                            <div class="cont">
                                <el-radio-group v-model="checkKc">
                                    <el-radio-button label="语文"></el-radio-button>
                                    <el-radio-button label="数学"></el-radio-button>
                                    <el-radio-button label="英语"></el-radio-button>
                                    <el-radio-button label="美术"></el-radio-button>
                                    <el-radio-button label="音乐"></el-radio-button>
                                    <el-radio-button label="社团活动"></el-radio-button>
                                </el-radio-group>
                            </div>
                        </div>

                        <div class="Kctips mt10">提示：鼠标移入空白表格设置当前课程，点击课程标签的关闭按钮 ”x” 设置为“不排课”，点击不排课标签的关闭按钮 ”x” 设置为空！<span class="close">知道了</span></div>

                        <div class="KbMain smallscroll">
                            <table cellspacing="0" cellpadding="0" class="kbinfo studentkb">
                                <tbody>
                                    <tr class="kbrow0"><th>星期/节次切换</th><th>星期一</th><th>星期二</th><th>星期三</th><th>星期四</th><th>星期五</th></tr>
                                    <tr><th class="publicTime" colspan="6">早读<span class="kbtime">14:7:48~15:7:48</span></th></tr>
                                    <tr class="kbrow1"><th>第一节<span class="kbtime"></span></th><td class="kcunit"></td><td class="kcunit"></td><td class="kcunit"></td><td class="kcunit"></td><td class="kcunit stat_1"><span>语文</span></td></tr>
                                    <tr class="kbrow2"><th>第二节<span class="kbtime"></span></th><td class="kcunit"></td><td class="kcunit"></td><td class="kcunit"></td><td class="kcunit"></td><td class="kcunit"></td></tr>
                                    <tr class="kbrow3"><th>第三节<span class="kbtime"></span></th><td class="kcunit"></td><td class="kcunit stat_1"><span>语文</span></td><td class="kcunit"></td><td class="kcunit"></td><td class="kcunit"></td></tr>
                                    <tr class="kbrow4"><th>第四节<span class="kbtime"></span></th><td class="kcunit"></td><td class="kcunit stat_1"><span>英语</span></td><td class="kcunit"></td><td class="kcunit"></td><td class="kcunit"></td></tr>
                                    <tr><th class="publicTime" colspan="6">午休<span class="kbtime"></span></th></tr>
                                    <tr class="kbrow5"><th>第五节<span class="kbtime"></span></th><td class="kcunit"></td><td class="kcunit"></td><td class="kcunit"></td><td class="kcunit"></td><td class="kcunit"></td></tr>
                                    <tr class="kbrow6"><th>第六节<span class="kbtime"></span></th><td class="kcunit"></td><td class="kcunit"></td><td class="kcunit"></td><td class="kcunit"></td><td class="kcunit"></td></tr>
                                    <tr class="kbrow7"><th>第七节<span class="kbtime"></span></th><td class="kcunit"></td><td class="kcunit"></td><td class="kcunit"></td><td class="kcunit"></td><td class="kcunit"></td></tr>
                                    <tr class="kbrow8"><th>第八节<span class="kbtime"></span></th><td class="kcunit"></td><td class="kcunit"></td><td class="kcunit"></td><td class="kcunit"></td><td class="kcunit"></td></tr>
                                </tbody>
                            </table>

                        </div>

                    </div>

                    <div v-show="setKc=='互斥/连排'" class="pkrightmenu">
                       
                        <div class="Kctips green">注意：设置的条件条数过多，会大大降低排课的概率，请优先设置最重要的！</div>

                        <table cellpadding="0" cellspacing="0" class="gentable fl mt10">
                            <tr><th class="xh">序号</th><th>课程名称</th><th>互斥/时间段</th><th>节次连排</th><th>课程连排</th></tr>
                            <tr><td class="xh">1</td><td>语文</td>
                                <td>
                                    <el-select v-model="selval1[0]" placeholder="请选择" style="width:100px;margin:0 5px;">
                                        <el-option
                                        v-for="item in seldata1"
                                        :label="item.label"
                                        :value="item.value">
                                        </el-option>
                                    </el-select>

                                    <el-select v-model="selval2[0]" placeholder="请选择" style="width:100px;margin:0 5px;">
                                        <el-option
                                        v-for="item in seldata2"
                                        :label="item.label"
                                        :value="item.value">
                                        </el-option>
                                    </el-select>
                                </td>
                                <td>
                                    <el-radio v-model="selval3[0]" label="1">是</el-radio>
                                    <el-radio v-model="selval3[0]" label="2">否</el-radio>
                                </td>
                                <td>
                                    <el-select v-model="selval4[0]" placeholder="请选择">
                                        <el-option
                                        v-for="item in seldata2"
                                        :label="item.label"
                                        :value="item.value">
                                        </el-option>
                                    </el-select>
                                </td>
                            </tr>
                            <tr><td class="xh">2</td><td>数学</td>
                                <td>
                                    <el-select v-model="selval1[1]" placeholder="请选择" style="width:100px;margin:0 5px;">
                                        <el-option
                                        v-for="item in seldata1"
                                        :label="item.label"
                                        :value="item.value">
                                        </el-option>
                                    </el-select>

                                    <el-select v-model="selval2[1]" placeholder="请选择" style="width:100px;margin:0 5px;">
                                        <el-option
                                        v-for="item in seldata2"
                                        :label="item.label"
                                        :value="item.value">
                                        </el-option>
                                    </el-select>
                                </td>
                                <td>
                                    <el-radio v-model="selval3[1]" label="1">是</el-radio>
                                    <el-radio v-model="selval3[1]" label="2">否</el-radio>
                                </td>
                                <td>
                                    <el-select v-model="selval4[1]" placeholder="请选择">
                                        <el-option
                                        v-for="item in seldata2"
                                        :label="item.label"
                                        :value="item.value">
                                        </el-option>
                                    </el-select>
                                </td>
                            </tr>

                            <tr><td class="xh">2</td><td>英语</td>
                                <td>
                                    <el-select v-model="selval1[2]" placeholder="请选择" style="width:100px;margin:0 5px;">
                                        <el-option
                                        v-for="item in seldata1"
                                        :label="item.label"
                                        :value="item.value">
                                        </el-option>
                                    </el-select>

                                    <el-select v-model="selval2[2]" placeholder="请选择" style="width:100px;margin:0 5px;">
                                        <el-option
                                        v-for="item in seldata2"
                                        :label="item.label"
                                        :value="item.value">
                                        </el-option>
                                    </el-select>
                                </td>
                                <td>
                                    <el-radio v-model="selval3[2]" label="1">是</el-radio>
                                    <el-radio v-model="selval3[2]" label="2">否</el-radio>
                                </td>
                                <td>
                                    <el-select v-model="selval4[2]" placeholder="请选择">
                                        <el-option
                                        v-for="item in seldata2"
                                        :label="item.label"
                                        :value="item.value">
                                        </el-option>
                                    </el-select>
                                </td>
                            </tr>


                            <tr><td class="xh">2</td><td>体育</td>
                                <td>
                                    <el-select v-model="selval1[3]" placeholder="请选择" style="width:100px;margin:0 5px;">
                                        <el-option
                                        v-for="item in seldata1"
                                        :label="item.label"
                                        :value="item.value">
                                        </el-option>
                                    </el-select>

                                    <el-select v-model="selval2[3]" placeholder="请选择" style="width:100px;margin:0 5px;">
                                        <el-option
                                        v-for="item in seldata2"
                                        :label="item.label"
                                        :value="item.value">
                                        </el-option>
                                    </el-select>
                                </td>
                                <td>
                                    <el-radio v-model="selval3[3]" label="1">是</el-radio>
                                    <el-radio v-model="selval3[3]" label="2">否</el-radio>
                                </td>
                                <td>
                                    <el-select v-model="selval4[3]" placeholder="请选择">
                                        <el-option
                                        v-for="item in seldata2"
                                        :label="item.label"
                                        :value="item.value">
                                        </el-option>
                                    </el-select>
                                </td>
                            </tr>





                        </table>

                    </div>

                    <div v-show="setKc=='单双周'" class="pkrightmenu">
                        <div class="oarow">
                            <el-button type="primary" @click="singledoubleKc=true" icon="el-icon-plus">新增</el-button>
                        </div>

                        <table cellpadding="0" cellspacing="0" class="gentable fl mt10">
                            <tr>
                                <th>单双周</th>
                                <th>双周课程</th>
                                <th>周上课节数</th>
                                <th>操作</th>
                            </tr>
                            <tr>
                                <td>语文</td>
                                <td>美术</td>
                                <td>4</td>
                                <td><span class="delRecord el-icon-delete"> 删除</span></td>
                            </tr>
                            <tr>
                                <td>数学</td>
                                <td>体育</td>
                                <td>4</td>
                                <td><span class="delRecord el-icon-delete"> 删除</span></td>
                            </tr>
                            <tr>
                                <td>英语</td>
                                <td>科学</td>
                                <td>4</td>
                                <td><span class="delRecord el-icon-delete"> 删除</span></td>
                            </tr>
                            <tr>
                                <td>语文</td>
                                <td>美术</td>
                                <td>4</td>
                                <td><span class="delRecord el-icon-delete"> 删除</span></td>
                            </tr>
                        </table>
                    </div>

                </el-row>



            </el-tab-pane>

            <el-tab-pane label="教师设置" name="second">
                <el-row>
                    <el-radio-group v-model="setTc">
                        <el-radio-button label="固定排/不排设置"></el-radio-button>
                        <el-radio-button label="互斥/连排"></el-radio-button>
                        <el-radio-button label="合班设置"></el-radio-button>
                    </el-radio-group>
                </el-row>

                <el-row class="mt20">
                    <div class="pkleftmenu" v-show="setTc!='合班设置'">
                        <div class="tit">选择排课年级</div>
                        <div class="tcfilter">
                            <el-input size="small"
                            prefix-icon="el-icon-search"
                            placeholder="输入关键字进行过滤"
                            v-model="filterText">
                            </el-input>
                        </div>
                        <el-tree  class='pkbjtree'
                        :data="data2"
                        node-key="id"
                        :default-expanded-keys="[2, 3]"
                        :default-checked-keys="[5]"
                        :filter-node-method="filterNode"
                        ref="tree2">
                        </el-tree>
                    </div>

                    <div v-show="setTc=='固定排/不排设置'" class="pkrightmenu">
                        <div class="setKCtime">
                            <div class="tit">已设置过的老师</div>
                            <div class="cont setcompletion">
                                <span class="stat_1">张晓琳</span>
                                <span class="stat_1">张晓琳</span>
                                <span class="stat_1">张晓琳</span>
                            </div>
                        </div>

                        <div class="Kctips mt10">提示：鼠标移入空白表格设置当前课程，点击课程标签的关闭按钮 ”x” 设置为“不排课”，点击不排课标签的关闭按钮 ”x” 设置为空！<span class="close">知道了</span></div>

                        <div class="KbMain smallscroll">
                            <table cellspacing="0" cellpadding="0" class="kbinfo teachkb">
                                <tbody>
                                    <tr class="kbrow0"><th>星期/节次切换</th><th>星期一</th><th>星期二</th><th>星期三</th><th>星期四</th><th>星期五</th></tr>
                                    <tr><th class="publicTime" colspan="6">早读<span class="kbtime">14:7:48~15:7:48</span></th></tr>
                                    <tr class="kbrow1"><th>第一节<span class="kbtime"></span></th><td class="kcunit"></td><td class="kcunit"></td><td class="kcunit"></td><td class="kcunit"></td><td class="kcunit stat_1"><span>三年(2)班 语文</span></td></tr>
                                    <tr class="kbrow2"><th>第二节<span class="kbtime"></span></th><td class="kcunit"></td><td class="kcunit"></td><td class="kcunit"></td><td class="kcunit"></td><td class="kcunit"></td></tr>
                                    <tr class="kbrow3"><th>第三节<span class="kbtime"></span></th><td class="kcunit"></td><td class="kcunit stat_1"><span>二年(3)班 语文</span></td><td class="kcunit"></td><td class="kcunit"></td><td class="kcunit"></td></tr>
                                    <tr class="kbrow4"><th>第四节<span class="kbtime"></span></th><td class="kcunit"></td><td class="kcunit stat_1"><span>三年(4)班 语文</span></td><td class="kcunit"></td><td class="kcunit"></td><td class="kcunit"></td></tr>
                                    <tr><th class="publicTime" colspan="6">午休<span class="kbtime"></span></th></tr>
                                    <tr class="kbrow5"><th>第五节<span class="kbtime"></span></th><td class="kcunit"></td><td class="kcunit"></td><td class="kcunit"></td><td class="kcunit"></td><td class="kcunit"></td></tr>
                                    <tr class="kbrow6"><th>第六节<span class="kbtime"></span></th><td class="kcunit"></td><td class="kcunit"></td><td class="kcunit"></td><td class="kcunit"></td><td class="kcunit"></td></tr>
                                    <tr class="kbrow7"><th>第七节<span class="kbtime"></span></th><td class="kcunit"></td><td class="kcunit"></td><td class="kcunit"></td><td class="kcunit"></td><td class="kcunit"></td></tr>
                                    <tr class="kbrow8"><th>第八节<span class="kbtime"></span></th><td class="kcunit"></td><td class="kcunit"></td><td class="kcunit"></td><td class="kcunit"></td><td class="kcunit"></td></tr>
                                </tbody>
                            </table>

                        </div>

                    </div>

                    <div v-show="setTc=='互斥/连排'" class="pkrightmenu">
                       
                        <div class="Kctips green">注意：设置的条件条数过多，会大大降低排课的概率，请优先设置最重要的！</div>

                        <table cellpadding="0" cellspacing="0" class="gentable fl mt10">
                            <tr><th>姓名</th><th>互斥</th><th>连续上课</th></tr>
                            <tr><td>张晓琳</td>
                                <td>
                                    <el-cascader
                                        expand-trigger="hover"
                                        :options="data2"
                                        v-model="selectedOptions2"
                                        @change="handleChange">
                                    </el-cascader>
                                </td>
                                <td>
                                    连上节数  
                                    <el-select v-model="selval5[0]" placeholder="请选择" style="width:100px;margin:0 5px;">
                                        <el-option
                                        v-for="item in seldata3"
                                        :label="item.label"
                                        :value="item.value">
                                        </el-option>
                                    </el-select>
                                </td>
                            </tr>

                        </table>

                    </div>

                    <div v-show="setTc=='合班设置'" class="pkrightmenu" style="margin-left:0px;">
                        
                        <div class="stepHBbox">
                            <div class="tit">第一步:选择课程</div>
                            <div class="stepCont smallscroll">
                                <el-tree  class='pkbjtree'
                                :data="seldata2"
                                node-key="id"
                                :default-expanded-keys="[2, 3]"
                                :default-checked-keys="[5]"
                                :filter-node-method="filterNode"
                                ref="tree2">
                                </el-tree>
                            </div>
                        </div>
                        <div class="arrowLeft">
                            <i class="el-icon-arrow-right"></i>
                        </div>
                        <div class="stepHBbox">
                            <div class="tit">第二步:选择班级</div>
                            <div class="stepCont smallscroll">
                                <el-tree  class='pkbjtree'
                                :data="data1"
                                node-key="id"
                                show-checkbox
                                :default-expanded-keys="[2, 3]"
                                :default-checked-keys="[5]"
                                :filter-node-method="filterNode"
                                ref="tree2">
                                </el-tree>
                            </div>
                        </div>
                        <div class="handleHBbox">
                            <div class="Hbopt">
                            <el-button type="primary" round>合班 <i class="el-icon-arrow-right"></i></el-button>
                            <el-button icon="el-icon-arrow-left" round>拆班</el-button>
                            </div>
                        </div>

                        <div class="HbResultBox">
                            <table class="gentable">
                                <tr>
                                    <th colspan="3">已存在的合班课程</th>
                                </tr>
                                <tr>
                                    <th class="xh"><el-checkbox></el-checkbox></th>
                                    <th class="xh">课程</th>
                                    <th>班级</th>
                                </tr>
                                <tr>
                                    <td class="xh"><el-checkbox v-model="checked[0]"></el-checkbox></td>
                                    <td class="xh">体育</td>
                                    <td>张晓琳/徐敏/徐敏/徐敏/徐敏/徐敏/徐敏徐敏/徐敏徐敏/徐敏徐敏/徐敏徐敏/徐敏徐敏/徐敏徐敏/徐敏徐敏（初一1班/初二2班/初二2班/初二2班/初二2班/初二2班/初二2班/初二2班/初二2班/初二2班/初二2班/初二2班/初二2班/初二2班/初二2班）</td>
                                </tr>
                                <tr>
                                    <td class="xh"><el-checkbox v-model="checked[1]"></el-checkbox></td>
                                    <td class="xh">体育</td>
                                    <td>张晓琳（初一1班/初一2班）</td>
                                </tr>
                                <tr>
                                    <td class="xh"><el-checkbox v-model="checked[2]"></el-checkbox></td>
                                    <td class="xh">体育</td>
                                    <td>张晓琳（初一1班/初一2班）</td>
                                </tr>
                                <tr>
                                    <td class="xh"><el-checkbox v-model="checked[3]"></el-checkbox></td>
                                    <td class="xh">体育</td>
                                    <td>张晓琳（初一1班/初一2班）</td>
                                </tr>
                            </table>
                        </div>
                        
                    </div>

                </el-row>
                
            </el-tab-pane>

            <el-tab-pane label="其他设置" name="third">
                <el-row>
                    <el-radio-group v-model="setTc1">
                        <el-radio-button label="课程时段分配"></el-radio-button>
                        <el-radio-button label="教案齐平"></el-radio-button>
                        <el-radio-button label="周任课分布"></el-radio-button>
                        <el-radio-button label="天任课分布"></el-radio-button>
                    </el-radio-group>

                    <div class="selgroup fr">
                        <el-select v-model="selval6[0]" placeholder="请选择年纪" style="width:150px;margin:0 5px;">
                            <el-option
                            v-for="item in seldata4"
                            :label="item.label"
                            :value="item.value">
                            </el-option>
                        </el-select>
                        <el-select v-model="selval7[0]" placeholder="请选择班级" style="width:150px;margin:0 5px;">
                            <el-option
                            v-for="item in seldata5"
                            :label="item.label"
                            :value="item.value">
                            </el-option>
                        </el-select>
                    </div>
                </el-row>

                <el-row class="mt20">
                    <div class="pkrightmenu allright" v-show="setTc1=='课程时段分配'">
                        <table cellpadding="0" cellspacing="0" class="gentable fl">
                            <tr><th rowspan="2">课程</th><th rowspan="2">老师</th><th colspan="2">课程时段</th><th colspan="2">重要程度</th></tr>
                            <tr><th><el-checkbox v-model="checked1">全部上午</el-checkbox></th><th><el-checkbox v-model="checked2">全部下午</el-checkbox></th><th><el-checkbox v-model="checked3">全部重要</el-checkbox></th><th><el-checkbox v-model="checked4">全部一般</el-checkbox></th></tr>
                            <tr>
                                <td>语文</td>
                                <td>张晓琳</td>
                                <td><el-radio v-model="radio[0]" label="1">上午</el-radio></td>
                                <td><el-radio v-model="radio[0]" label="2">下午</el-radio></td>
                                <td><el-radio v-model="radio[1]" label="1">重要</el-radio></td>
                                <td><el-radio v-model="radio[1]" label="2">一般</el-radio></td>
                            </tr>
                            <tr>
                                <td>语文</td>
                                <td>张晓琳</td>
                                <td><el-radio v-model="radio[0]" label="1">上午</el-radio></td>
                                <td><el-radio v-model="radio[0]" label="2">下午</el-radio></td>
                                <td><el-radio v-model="radio[1]" label="1">重要</el-radio></td>
                                <td><el-radio v-model="radio[1]" label="2">一般</el-radio></td>
                            </tr>
                            <tr>
                                <td>语文</td>
                                <td>张晓琳</td>
                                <td><el-radio v-model="radio[0]" label="1">上午</el-radio></td>
                                <td><el-radio v-model="radio[0]" label="2">下午</el-radio></td>
                                <td><el-radio v-model="radio[1]" label="1">重要</el-radio></td>
                                <td><el-radio v-model="radio[1]" label="2">一般</el-radio></td>
                            </tr>
                            <tr>
                                <td>语文</td>
                                <td>张晓琳</td>
                                <td><el-radio v-model="radio[0]" label="1">上午</el-radio></td>
                                <td><el-radio v-model="radio[0]" label="2">下午</el-radio></td>
                                <td><el-radio v-model="radio[1]" label="1">重要</el-radio></td>
                                <td><el-radio v-model="radio[1]" label="2">一般</el-radio></td>
                            </tr>
                            <tr>
                                <td>语文</td>
                                <td>张晓琳</td>
                                <td><el-radio v-model="radio[0]" label="1">上午</el-radio></td>
                                <td><el-radio v-model="radio[0]" label="2">下午</el-radio></td>
                                <td><el-radio v-model="radio[1]" label="1">重要</el-radio></td>
                                <td><el-radio v-model="radio[1]" label="2">一般</el-radio></td>
                            </tr>
                            <tr>
                                <td>语文</td>
                                <td>张晓琳</td>
                                <td><el-radio v-model="radio[0]" label="1">上午</el-radio></td>
                                <td><el-radio v-model="radio[0]" label="2">下午</el-radio></td>
                                <td><el-radio v-model="radio[1]" label="1">重要</el-radio></td>
                                <td><el-radio v-model="radio[1]" label="2">一般</el-radio></td>
                            </tr>

                        </table>
                    </div>

                    <div class="pkrightmenu allright" v-show="setTc1=='教案齐平'">
                        <table cellpadding="0" cellspacing="0" class="gentable fl">
                            <tr><th rowspan="2">课程</th><th rowspan="2">老师</th><th colspan="2">课程时段</th><th colspan="2">重要程度</th></tr>
                            <tr><th><el-checkbox v-model="checked1">全部上午</el-checkbox></th><th><el-checkbox v-model="checked2">全部下午</el-checkbox></th><th><el-checkbox v-model="checked3">全部重要</el-checkbox></th><th><el-checkbox v-model="checked4">全部一般</el-checkbox></th></tr>
                            <tr>
                                <td>语文</td>
                                <td>张晓琳</td>
                                <td><el-radio v-model="radio[0]" label="1">上午</el-radio></td>
                                <td><el-radio v-model="radio[0]" label="2">下午</el-radio></td>
                                <td><el-radio v-model="radio[1]" label="1">重要</el-radio></td>
                                <td><el-radio v-model="radio[1]" label="2">一般</el-radio></td>
                            </tr>
                            <tr>
                                <td>语文</td>
                                <td>张晓琳</td>
                                <td><el-radio v-model="radio[0]" label="1">上午</el-radio></td>
                                <td><el-radio v-model="radio[0]" label="2">下午</el-radio></td>
                                <td><el-radio v-model="radio[1]" label="1">重要</el-radio></td>
                                <td><el-radio v-model="radio[1]" label="2">一般</el-radio></td>
                            </tr>
                            <tr>
                                <td>语文</td>
                                <td>张晓琳</td>
                                <td><el-radio v-model="radio[0]" label="1">上午</el-radio></td>
                                <td><el-radio v-model="radio[0]" label="2">下午</el-radio></td>
                                <td><el-radio v-model="radio[1]" label="1">重要</el-radio></td>
                                <td><el-radio v-model="radio[1]" label="2">一般</el-radio></td>
                            </tr>
                            <tr>
                                <td>语文</td>
                                <td>张晓琳</td>
                                <td><el-radio v-model="radio[0]" label="1">上午</el-radio></td>
                                <td><el-radio v-model="radio[0]" label="2">下午</el-radio></td>
                                <td><el-radio v-model="radio[1]" label="1">重要</el-radio></td>
                                <td><el-radio v-model="radio[1]" label="2">一般</el-radio></td>
                            </tr>


                        </table>
                    </div>


                    <div class="pkrightmenu allright" v-show="setTc1=='周任课分布'">
                        <table cellpadding="0" cellspacing="0" class="gentable fl">
                            <tr><th rowspan="2">课程</th><th rowspan="2">老师</th><th colspan="2">课程时段</th><th colspan="2">重要程度</th></tr>
                            <tr><th><el-checkbox v-model="checked1">全部上午</el-checkbox></th><th><el-checkbox v-model="checked2">全部下午</el-checkbox></th><th><el-checkbox v-model="checked3">全部重要</el-checkbox></th><th><el-checkbox v-model="checked4">全部一般</el-checkbox></th></tr>
                            <tr>
                                <td>语文</td>
                                <td>张晓琳</td>
                                <td><el-radio v-model="radio[0]" label="1">上午</el-radio></td>
                                <td><el-radio v-model="radio[0]" label="2">下午</el-radio></td>
                                <td><el-radio v-model="radio[1]" label="1">重要</el-radio></td>
                                <td><el-radio v-model="radio[1]" label="2">一般</el-radio></td>
                            </tr>
                            <tr>
                                <td>语文</td>
                                <td>张晓琳</td>
                                <td><el-radio v-model="radio[0]" label="1">上午</el-radio></td>
                                <td><el-radio v-model="radio[0]" label="2">下午</el-radio></td>
                                <td><el-radio v-model="radio[1]" label="1">重要</el-radio></td>
                                <td><el-radio v-model="radio[1]" label="2">一般</el-radio></td>
                            </tr>
                            <tr>
                                <td>语文</td>
                                <td>张晓琳</td>
                                <td><el-radio v-model="radio[0]" label="1">上午</el-radio></td>
                                <td><el-radio v-model="radio[0]" label="2">下午</el-radio></td>
                                <td><el-radio v-model="radio[1]" label="1">重要</el-radio></td>
                                <td><el-radio v-model="radio[1]" label="2">一般</el-radio></td>
                            </tr>


                        </table>
                    </div>


                    <div class="pkrightmenu allright" v-show="setTc1=='天任课分布'">
                        <table cellpadding="0" cellspacing="0" class="gentable fl">
                            <tr><th rowspan="2">课程</th><th rowspan="2">老师</th><th colspan="2">课程时段</th><th colspan="2">重要程度</th></tr>
                            <tr><th><el-checkbox v-model="checked1">全部上午</el-checkbox></th><th><el-checkbox v-model="checked2">全部下午</el-checkbox></th><th><el-checkbox v-model="checked3">全部重要</el-checkbox></th><th><el-checkbox v-model="checked4">全部一般</el-checkbox></th></tr>
                            <tr>
                                <td>语文</td>
                                <td>张晓琳</td>
                                <td><el-radio v-model="radio[0]" label="1">上午</el-radio></td>
                                <td><el-radio v-model="radio[0]" label="2">下午</el-radio></td>
                                <td><el-radio v-model="radio[1]" label="1">重要</el-radio></td>
                                <td><el-radio v-model="radio[1]" label="2">一般</el-radio></td>
                            </tr>

                        </table>
                    </div>
                </el-row>

            </el-tab-pane>



            <el-tab-pane label="规则列表" name="fourth">
                <el-row>

                    <div class="selgroup">
                        <el-select v-model="selval8[0]" placeholder="请选择" style="width:150px;margin:0 5px;">
                            <el-option
                            v-for="item in seldata6"
                            :label="item.label"
                            :value="item.value">
                            </el-option>
                        </el-select>
                    </div>
                </el-row>
                <div class="ruleTips fl mt10">总计：1260 条，其中“必须满足” 100 条、“重要” 25 条、一般“1条”</div>

                <table cellpadding="0" cellspacing="0" class="gentable mingentable fl mt10">
                    <tr><th>规则</th><th>年级/课程</th><th>节次</th><th>重要程度</th><th>操作</th></tr>
                    <tr>
                        <td>课程固定排</td>
                        <td>六年级</td>
                        <td style="width:500px; text-align:left;">周三第3节</td>
                        <td>必须满足</td>
                        <td><span class="delRecord el-icon-delete"> 删除</span></td>
                    </tr>
                    <tr>
                        <td>课程规定不排</td>
                        <td>语文</td>
                        <td style="width:500px; text-align:left;">周三第3节周三第3节</td>
                        <td>必须满足</td>
                        <td><span class="delRecord el-icon-delete"> 删除</span></td>
                    </tr>
                    <tr>
                        <td>课程规定不排</td>
                        <td>数学</td>
                        <td style="width:500px; text-align:left;">周三第3节周三第3节周三第3节周三第3节周三第3节周三第3节周三第3节周三第3节</td>
                        <td>必须满足</td>
                        <td><span class="delRecord el-icon-delete"> 删除</span></td>
                    </tr>
                    <tr>
                        <td>教师固定排</td>
                        <td>信息技术</td>
                        <td style="width:500px; text-align:left;">周三第3节</td>
                        <td>必须满足</td>
                        <td><span class="delRecord el-icon-delete"> 删除</span></td>
                    </tr>
                    

                </table>



            </el-tab-pane>
        </el-tabs>



        <!--以下都是弹层页面-->
        <el-dialog title="添加单双周课程" :visible.sync="singledoubleKc" width="500px">
            <el-form :model="sdform" ref="sdform" label-width="90px">

                <el-form-item prop="singlekc" resetField label="单周课程" :rules="[{required: true,message: '课程不能为空'}]">
                        <el-select v-model="sdform.singlekc" placeholder="请选择">
                            <el-option
                            v-for="item in seldata2"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                            </el-option>
                        </el-select>
                </el-form-item>

                <el-form-item prop="doublekc" resetField label="双周课程" :rules="[{required: true,message: '课程不能为空'}]">
                        <el-select v-model="sdform.doublekc" placeholder="请选择">
                            <el-option
                            v-for="item in seldata2"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                            </el-option>
                        </el-select>
                </el-form-item>

                <el-form-item prop="bzkc" resetField label="备注">
                        <el-input
                        type="textarea"
                        :rows="5"
                        placeholder="请输入内容"
                        v-model="sdform.bzkc">
                        </el-input>
                </el-form-item>


                


            </el-form>

            <span slot="footer" class="dialog-footer">
                <el-button @click="selpublictime = false">取 消</el-button>
                <el-button type="primary"  @click="submitForm('sdform')">确 定</el-button>
            </span>
        </el-dialog>

    </div>  
</template>

<script>
var $ = require('jquery');
export default {
  name: 'HelloWorld',
  data () {
    return {
      checked:[],
      checked1:"",
      checked2:"",
      checked3:"",
      checked4:"",
      selectedOptions2:[],
      selteach:"张晓琳",
      filterText:"",
      setKc:"固定排/不排设置",
      setTc:"固定排/不排设置",
      setTc1:"课程时段分配",
      checkKc:'语文',
      singledoubleKc:false,      //设置单双周课程弹层
      activeName: 'first',
      selval1:[],
      selval2:[],
      selval3:[],
      selval4:[],
      selval5:[],
      selval6:[],
      selval7:[],
      selval8:[],
      radio:[],
      sdform:{"singlekc":"","doublekc":"","bzkc":""},
      seldata1:[{
          label:"半天",
          value:"1"
      },{
          label:"全天",
          value:"1"
      }],
      seldata2:[{
          label:"数学",
          value:"数学"
      },{
          label:"语文",
          value:"语文"
      },{
          label:"英语",
          value:"英语"
      },{
          label:"科学",
          value:"科学"
      },{
          label:"美术",
          value:"美术"
      },{
          label:"体育",
          value:"体育"
      },{
          label:"晨间活动",
          value:"晨间活动"
      }],
      seldata3:[{
          label:"0",
          value:"0"
      },{
          label:"1",
          value:"1"
      },{
          label:"2",
          value:"2"
      },{
          label:"3",
          value:"3"
      },{
          label:"4",
          value:"4"
      },{
          label:"5",
          value:"5"
      },{
          label:"6",
          value:"6"
      },{
          label:"7",
          value:"7"
      },{
          label:"8",
          value:"8"
      },{
          label:"9",
          value:"9"
      }],
      seldata4:[{
          label:"一年级",
          value:"一年级"
      },{
          label:"二年级",
          value:"二年级"
      },{
          label:"三年级",
          value:"三年级"
      },{
          label:"四年级",
          value:"四年级"
      },{
          label:"五年级",
          value:"五年级"
      },{
          label:"六年级",
          value:"六年级"
      }],
      seldata5:[{
          label:"一年级(1)班",
          value:"一年级(1)班"
      },{
          label:"一年级(2)班",
          value:"一年级(2)班"
      },{
          label:"一年级(3)班",
          value:"一年级(3)班"
      },{
          label:"一年级(4)班",
          value:"一年级(4)班"
      },{
          label:"一年级(5)班",
          value:"一年级(5)班"
      },{
          label:"一年级(6)班",
          value:"一年级(6)班"
      },{
          label:"一年级(7)班",
          value:"一年级(7)班"
      }],
      seldata6:[{
          label:"全部规则",
          value:"全部规则"
      }],
      data1: [{
          label: '全校',
          children: [{
            label: '一年级',
            children: [{
              label: '一班'
            },{
              label: '二班'
            },{
              label: '三班'
            }]
          },{
            label: '二年级',
            children: [{
              label: '一班'
            },{
              label: '二班'
            },{
              label: '三班'
            },{
              label: '四班'
            },{
              label: '五班'
            }]
          },{
            label: '三年级',
            children: [{
              label: '一班'
            },{
              label: '二班'
            },{
              label: '三班'
            }]
          },]
        }],
        data2: [{
          value: '语文组',
          label: '语文组',
          children: [{
            label: '张晓琳',
            value: '张晓琳',
          },{
            label: '裴玉洁',
            value: '裴玉洁',
          },{
            label: '葛北娇',
            value: '葛北娇',
          }]
        },{
          value: '数学组',
          label: '数学组',
          children: [{
            label: '张晓琳',
            value: '张晓琳',
          },{
            label: '裴玉洁',
            value: '裴玉洁',
          },{
            label: '葛北娇',
            value: '葛北娇',
          }]
        },{
          value: '英语组',
          label: '英语组',
          children: [{
            label: '张晓琳',
            value: '张晓琳',
          },{
            label: '裴玉洁',
            value: '裴玉洁',
          },{
            label: '葛北娇',
            value: '葛北娇',
          }]
        },{
          value: '美术组',
          label: '美术组',
          children: [{
            label: '张晓琳',
            value: '张晓琳',
          },{
            label: '裴玉洁',
            value: '裴玉洁',
          },{
            label: '葛北娇',
            value: '葛北娇',
          }]
        },{
          value: '科学组',
          label: '科学组',
          children: [{
            label: '张晓琳',
            value: '张晓琳',
          },{
            label: '裴玉洁',
            value: '裴玉洁',
          },{
            label: '葛北娇',
            value: '葛北娇',
          }]
        }],

    }
  },
  watch: {
        filterText(val) {
        this.$refs.tree2.filter(val);
        }
  },
  mounted:function(){
        var that = this;
        $(".KbMain").on("mouseover",".kcunit",function(){
            if(!$(this).is(".stat_1,.stat_2,.stat_3")){
                $(this).addClass("unittips");
            }
        });
        $(".KbMain").on("mouseout",".kcunit",function(){
            $(this).removeClass("unittips");
        });

        $(".KbMain").on("click",".el-icon-close",function(e){
            e.stopPropagation();
            $(this).parents("td").attr("class","kcunit");
            $(this).parents("td").html("");
        });

        $(".KbMain").on("mouseover",".stat_2 span",function(e){
            e.stopPropagation();
            $(this).append("<span class='tips'>"+$(this).attr("data-tit")+"</span>")
           //$(this).parents("td").html("");
        });

        $(".KbMain").on("mouseout",".stat_2 span",function(e){
            e.stopPropagation();
            $(this).children(".tips").remove();
           //$(this).parents("td").html("");
        });




        


        $(".KbMain").on("click",".kcunit",function(){
            var a="";
            var b="";
            if($(this).parents(".kbinfo").hasClass("studentkb")){
                a = "<span data-tit='再点击设置不排课'>"+that.checkKc+"<i class='el-icon-close'></i></span>"
                b = "<span>"+that.checkKc+"不排课<i class='el-icon-close'></i></span>"
            }else if($(this).parents(".kbinfo").hasClass("teachkb")){
                a = "<span data-tit='再点击设置不排课'>固定排<i class='el-icon-close'></i></span>"
                b = "<span>不排课<i class='el-icon-close'></i></span>"
            }

            if(!$(this).is(".stat_1,.stat_2,.stat_3")){   
                $(this).removeClass("unittips");
                $(this).addClass("stat_2");
                $(this).html(a);
            }else if($(this).hasClass("stat_2")){
                $(this).removeClass("stat_2");
                $(this).addClass("stat_3");
                $(this).html(b); 
            }
        });
  },
  methods:{
      handleClick(tab, event) {
        console.log(tab, event);
      },
      submitForm(formName) {
        var that = this;
          // console.log(this.$refs[formName]);
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.singledoubleKc = false;
          }
        });
      },
      filterNode(value, data) {
        if (!value) return true;
        return data.label.indexOf(value) !== -1;
      },
      handleChange(){

      },
  },

}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.view{width:100%; height:100%;}
</style>
