<template>
<div class="view">
    <div class="pkprocess">
        <div class="pkprocessMain">
            <div class="pkprocessLine"></div>
            <div class="pkstep complete">
                <div class="pkstepicon pkicon-1"></div>
                <div class="pksteptit">基础设置</div>
            </div>
            <div class="pkstep complete">
                <div class="pkstepicon pkicon-2"></div>
                <div class="pksteptit">规则设置</div>
            </div>
            <div class="pkstep complete">
                <div class="pkstepicon pkicon-3"></div>
                <div class="pksteptit">自动排课</div>
            </div>
            <div class="pkstep complete">
                <div class="pkstepicon pkicon-4"></div>
                <div class="pksteptit">排课调整</div>
            </div>
            <div class="pkstep activ">
                <div class="pkstepicon pkicon-5"></div>
                <div class="pksteptit">查看课表</div>
            </div>
        </div>
    </div>

    <el-tabs v-model="activeName" @tab-click="handleClick" class="mt30">

        <el-tab-pane label="班级课表" name="first">
            <el-row>
                <div class="selgroup fl">
                    <el-select v-model="selval1[0]" placeholder="请选择年纪" style="width:150px;margin:0 5px;">
                        <el-option
                        v-for="item in seldata1"
                        :label="item.label"
                        :value="item.value">
                        </el-option>
                    </el-select>
                    <el-select v-model="selval2[0]" placeholder="请选择班级" style="width:150px;margin:0 5px;">
                        <el-option
                        v-for="item in seldata2"
                        :label="item.label"
                        :value="item.value">
                        </el-option>
                    </el-select>
                </div>
                <div class="fr">
                    <el-checkbox v-model="jscheck" label="教师" border></el-checkbox>
                    <el-button type="primary" icon="el-icon-upload2">导出</el-button>
                </div>
            </el-row>

            <el-row>
                <table cellpadding="0" cellspacing="0" class="gentable fl mt10 tzkcTable">
                    <tr><th>星期/节次</th><th>星期一</th><th>星期二</th><th>星期三</th><th>星期四</th><th>星期五</th></tr>
                    <th class="publicTime" colspan="6">早读<span class="kbtime">7:00 ~ 7:30</span></th>
                    <tr><th>第一节</th><td><span>语文</span></td><td><span class="">英语</span></td><td><span>语文</span></td><td></td><td></td></tr>
                    <tr><th>第二节</th><td><span>语文</span></td><td><span class="">单:英语 - 双:美术</span></td><td><span>语文</span></td><td></td><td></td></tr>
                    <tr><th>第三节</th><td><span>语文</span></td><td><span class="">体育</span></td><td><span>语文</span></td><td></td><td></td></tr>
                    <tr><th>第四节</th><td><span>语文</span></td><td><span class="">体育</span></td><td><span>语文</span></td><td></td><td></td></tr>
                    <tr><th></th><td></td><td></td><td></td><td></td><td></td></tr>
                    <tr><th>第五节</th><td><span>语文</span></td><td><span class="">英语</span></td><td><span>语文</span></td><td></td><td></td></tr>
                    <tr><th>第六节</th><td><span>语文</span></td><td><span class="">数学</span></td><td><span>语文</span></td><td></td><td></td></tr>
                    <tr><th>第七节</th><td><span>语文</span></td><td><span class="">体育</span></td><td><span>语文</span></td><td></td><td></td></tr>
                    <tr><th>第八节</th><td><span>语文</span></td><td><span class="">体育</span></td><td><span>语文</span></td><td></td><td></td></tr>
                </table>
            </el-row>

        </el-tab-pane>

        <el-tab-pane label="教师课表" name="second">

            <el-row>
                <div class="selgroup fl">
                    <el-select v-model="selval1[0]" placeholder="请选择年纪" style="width:150px;margin:0 5px;">
                        <el-option
                        v-for="item in seldata1"
                        :label="item.label"
                        :value="item.value">
                        </el-option>
                    </el-select>
                    <el-select v-model="selval2[0]" placeholder="请选择班级" style="width:150px;margin:0 5px;">
                        <el-option
                        v-for="item in seldata2"
                        :label="item.label"
                        :value="item.value">
                        </el-option>
                    </el-select>
                    <el-input class="fl" style="width:250px;"
                    prefix-icon="el-icon-search"
                    placeholder="输入关键字进行过滤"
                    v-model="filterText">
                    </el-input>
                </div>
                <div class="fr">
                    <el-button type="primary" icon="el-icon-upload2">导出</el-button>
                </div>
            </el-row>

            <el-row>
                <div class="teachKbInfo mt10">黄颖颖老师课表-班级活动/课外活动/数学/体魄 <span>79/83</span></div>
            </el-row>

            <el-row>
                <table cellpadding="0" cellspacing="0" class="gentable fl mt10 tzkcTable">
                    <tr><th>星期/节次</th><th>星期一</th><th>星期二</th><th>星期三</th><th>星期四</th><th>星期五</th></tr>
                    <th class="publicTime" colspan="6">早读<span class="kbtime">7:00 ~ 7:30</span></th>
                    <tr><th>第一节</th><td><span>六年级3班-数学</span></td><td><span class="">六年级3班-语文</span></td><td><span></span></td><td></td><td></td></tr>
                    <tr><th>第二节</th><td><span></span></td><td><span class="">六年级3班-数学</span></td><td><span></span></td><td></td><td></td></tr>
                    <tr><th>第三节</th><td><span></span></td><td><span class=""></span></td><td><span></span></td><td></td><td></td></tr>
                    <tr><th>第四节</th><td><span></span></td><td><span class=""></span></td><td><span></span></td><td></td><td></td></tr>
                    <tr><th></th><td></td><td></td><td></td><td></td><td></td></tr>
                    <tr><th>第五节</th><td><span></span></td><td><span class=""></span></td><td><span></span></td><td></td><td></td></tr>
                    <tr><th>第六节</th><td><span></span></td><td><span class=""></span></td><td><span></span></td><td></td><td></td></tr>
                    <tr><th>第七节</th><td><span></span></td><td><span class=""></span></td><td><span></span></td><td></td><td></td></tr>
                    <tr><th>第八节</th><td><span></span></td><td><span class=""></span></td><td><span></span></td><td></td><td></td></tr>
                </table>
            </el-row>

            <el-row>
                <div class="teachKbInfo mt10">黄颖颖老师课表-班级活动/课外活动/数学/体魄 <span>79/83</span></div>
            </el-row>

        </el-tab-pane>

        <el-tab-pane label="总课表" name="third">
            <el-row>
                <div class="selgroup fl">
                    <el-select v-model="selval1[0]" placeholder="请选择年纪" style="width:150px;margin:0 5px;">
                        <el-option
                        v-for="item in seldata1"
                        :label="item.label"
                        :value="item.value">
                        </el-option>
                    </el-select>
                </div>
                <div class="fr">
                    <el-button type="primary" icon="el-icon-upload2">导出</el-button>
                </div>
            </el-row>

            <el-row class="sumKBBox mt20">
                <div class="kbbcFixed">
                    <table cellpadding="0" cellspacing="0">
                        <tr><td style="height:100px;">年级程表</td></tr>
                        <tr><td>一年级1班</td></tr>
                        <tr><td>一年级2班</td></tr>
                        <tr><td>一年级3班</td></tr>
                        <tr><td>一年级4班</td></tr>
                        <tr><td>一年级5班</td></tr>
                        <tr><td>一年级6班</td></tr>
                        <tr><td>一年级7班</td></tr>
                        <tr><td>一年级8班</td></tr>
                        <tr><td>一年级9班</td></tr>
                    </table>
                </div>
                <div class="KbBoxScroll smallscroll">
                    <div class="largekb" style="width:4500px;">
                        <table cellpadding="0" cellspacing="0" class="zkbtable fl">
                            <tr><th colspan="8">星期一</th></tr>
                            <tr><th>第一节</th><th>第二节</th><th>第三节</th><th>第四节</th><th>第五节</th><th>第六节</th><th>第七节</th><th>第八节</th></tr>
                            <tr>
                                <td>语文<br>张晓琳</td>
                                <td>语文<br>张晓琳/王老师</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td>语文<br>张晓琳/王老师</td>
                                <td></td>
                                <td></td>
                                <td>语文<br>张晓琳</td>
                                <td></td>
                            </tr>
                            <tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
                            <tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
                            <tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
                            <tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
                            <tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
                            <tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
                            <tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
                        </table>

                        <table cellpadding="0" cellspacing="0" class="zkbtable fl">
                            <tr><th colspan="8">星期一</th></tr>
                            <tr><th>第一节</th><th>第二节</th><th>第三节</th><th>第四节</th><th>第五节</th><th>第六节</th><th>第七节</th><th>第八节</th></tr>
                            <tr>
                                <td>语文<br>张晓琳</td>
                                <td>语文<br>张晓琳/王老师</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td>语文<br>张晓琳/王老师</td>
                                <td></td>
                                <td></td>
                                <td>语文<br>张晓琳</td>
                                <td></td>
                            </tr>
                            <tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
                            <tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
                            <tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
                            <tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
                            <tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
                            <tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
                            <tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
                        </table>
                    </div>
                </div>
            </el-row>

        </el-tab-pane>

        <el-tab-pane label="总任课表" name="fourth">
        </el-tab-pane>

        <el-tab-pane label="课表质量" name="fifth">
            <el-row>
                <div class="kbzl_mzl">规则满足率：89.43%</div>
            </el-row>
            <el-row>
                <div class="kbzl_mz_info mt10">在排课规则中，<span class='mz'>班级不排课时间</span>、<span class='mz'>课程不排课时间</span>、<span class='mz'>教师不排课时间</span>、<span class='mz'>不连堂节次</span>、<span class='mz'>合班课</span>、<span class='mz'>教案平齐</span>等规则的满足率为100%。<br>
                <span class='bmz'>周任课分布</span>、<span class='bmz'>日任课分布</span>、<span class='bmz'>连上限制</span>等规则仍有不满足。</div>
            </el-row>
            <el-row class="mt20">
                <el-select v-model="selval4" placeholder="请选择" style="width:150px;">
                    <el-option
                    v-for="item in seldata4"
                    :label="item.label"
                    :value="item.value">
                    </el-option>
                </el-select>
            </el-row>

            <el-row class="kbExplain mt20">
                <div class="kbExplain_tit">周任课分布</div>
                <div class="kbExplain_cont">特别重要规则满足率：32.00% / 相对重要规则满足率：-- / 一般规则满足率：--<br>特别重要：<br>1、童一萍老师所任教的六年级语文周课时情况为(2,4,2,2,3)课时分配不均匀<br>2、葛晨倩老师所任教的六年级活动周课时情况为(0,2,0,1,1)课时分配不均匀<br>3、吴晓庆老师所任教的六年级数学周课时情况为(2,4,1,2,3)课时分配不均匀<br>4、祝锐斐老师所任教的六年级语文周课时情况为(1,3,5,1,3)课时分配不均匀<br>5、席夏青老师所任教的六年级活动周课时情况为(1,0,1,0,2)课时分配不均匀<br>6、范华英老师所任教的六年级美术周课时情况为(4,2,3,2,1)课时分配不均匀<br>7、施一英老师所任教的六年级信息技术周课时情况为(0,0,0,1,2)课时分配不均匀
                </div>
            </el-row>

            <el-row class="kbExplain mt20">
                <div class="kbExplain_tit">日任课分布</div>
                <div class="kbExplain_cont">特别重要规则满足率：60.00% / 相对重要规则满足率：-- / 一般规则满足率：--
                </div>
            </el-row>  

            <el-row class="kbExplain mt20">
                <div class="kbExplain_tit">连上限制</div>
                <div class="kbExplain_cont">特别重要规则满足率：96.00% / 相对重要规则满足率：-- / 一般规则满足率：--
                </div>
            </el-row>  

        </el-tab-pane>

    </el-tabs>


    <!--以下是弹层-->


</div><!--view结尾-->


</template>

<script>
export default {
  name: 'zdpk',
   data() {
    return {
        activeName: 'first',
        jscheck:"",
        filterText:"",
        selval1:[],
        selval2:[],
        selval3:[],
        selval4:"",
        seldata1:[{
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
        seldata2:[{
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
        seldata3:[{
            label:"张老师",
            value:"张老师"
        }],
        seldata4:[{
            label:"全部不满足规则",
            value:"全部不满足规则"
        }],
    }
  },
  mounted: function(){
    
  },
  methods:{
      handleClick(tab, event) {
        console.log(tab, event);
      },
  }
}
</script>

<style scope>
    #app{
        height: 100%;
    }

    
</style>
