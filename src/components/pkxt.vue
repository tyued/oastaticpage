<template>
    <div class="view">
        <div class="pkprocess">
            <div class="pkprocessMain">
                <div class="pkprocessLine"></div>
                <div class="pkstep activ">
                    <div class="pkstepicon pkicon-1"></div>
                    <div class="pksteptit">基础设置</div>
                </div>
                <div class="pkstep">
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
            <!-- 这里是其他标签卡 -->
            <el-tab-pane label="课时设置" name="first">

                <div class="pkleftmenu">
                    <div class="tit">设置排课年级</div>

                    <el-tree  class='pkbjtree'
                    :data="data2"
                    show-checkbox
                    node-key="id"
                    :default-expanded-keys="[2, 3]"
                    :default-checked-keys="[5]"
                    :props="defaultProps">
                    </el-tree>

                </div>
                <div class="pkrightmenu">
                    <div class="setKCtime">
                        <div class="tit">设置课程时间</div>
                        <div class="cont">
                            <div class="pkset fl">
                                <el-checkbox-group v-model="checkboxGroup1" size="small">
                                <el-checkbox-button v-for="city in cities" :label="city" :disabled="city === '北京'" :key="city">{{city}}</el-checkbox-button>
                                </el-checkbox-group>
                            </div>
                            <div class="pkset fl">
                                <span class='kcspan'>上午节数</span> <el-input-number v-model="num1" :min="1" :max="10" label="描述文字" size="small"></el-input-number>
                            </div>
                            <div class="pkset fl">
                                <span class='kcspan'>下午节数</span> <el-input-number v-model="num2" :min="1" :max="10" label="描述文字" size="small"></el-input-number>
                            </div>
                            <div class="pkset fl">
                                <span class='kcspan'>晚上节数</span> <el-input-number v-model="num3" :min="1" :max="10" label="描述文字" size="small"></el-input-number>
                            </div>

                            <div class="pkset fr">
                                <el-button size="small" type="success" @click="CreateKB">生成课表</el-button>
                                 <el-button class='sjd1' @click="SetKbTime" size="small" type="primary">节次时间</el-button>
                                 <el-button class='sjd2' @click="CreatePublicTime" size="small" type="primary">公共时段</el-button>
                            </div>


                        </div>
                    </div>

                    <div class="KbMain" v-html="kbinfo">
                        
                        


                    </div>
                </div>

            </el-tab-pane>



            <!-- 这里是其他标签卡 -->
            <el-tab-pane label="课程设置" name="second">
            
                <div class="pkleftmenu">
                    <div class="tit">设置排课年级</div>

                    <el-tree class='pkbjtree'
                    :data="data2"
                    show-checkbox
                    node-key="id"
                    :default-expanded-keys="[2, 3]"
                    :default-checked-keys="[5]"
                    :props="defaultProps">
                    </el-tree>

                </div>
                <div class="pkrightmenu">
                    <div class="kcszMain">
                        <table class="kcsztable" cellpadding="0" cellspacing="0" style="width:2100px;">
                            <tr><th>课程名称</th><th>课程类型</th><th>每周上课节数</th><th>状态</th><th>备注一</th><th>备注二</th></tr>
                            <tr><td>语文</td><td><span class='type_1'>必修</span></td><td><el-input-number size='small' v-model="weekteachnum[0]" :min="1" :max="10" label="描述文字"></el-input-number></td><td><span class="stat_1">各班级不一致</span></td><td></td><td></td></tr>
                            
                            <tr><td>语文</td><td><span class='type_2'>选修</span></td><td><el-input-number size='small' v-model="weekteachnum[1]" :min="1" :max="10" label="描述文字"></el-input-number></td><td><span class="stat_2">各年级一致</span></td><td></td><td></td></tr>

                            <tr><td>语文</td><td><span class='type_3'>活动</span></td><td><el-input-number size='small' v-model="weekteachnum[2]" :min="1" :max="10" label="描述文字"></el-input-number></td><td><span class="stat_2">各班级一致</span></td><td></td><td></td></tr>

                            <tr><td>语文</td><td><span class='type_1'>必修</span></td><td><el-input-number size='small' v-model="weekteachnum[3]" :min="1" :max="10" label="描述文字"></el-input-number></td><td><span class="stat_1">各班级不一致</span></td><td></td><td></td></tr>    
                        </table>


                    </div>

                    <div class='totalkc'>节数合计/课程容量：21/35</div>

                </div>

            
            </el-tab-pane>




            <!-- 这里是其他标签卡 -->
            <el-tab-pane label="教师设置" name="third">
            
            <div class="jsszhead clear">
            <div class='selectNj fl clear'>

                <el-select v-model="selectNj" size="small" placeholder="请选择">
                    <el-option
                    v-for="item in njList"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                    </el-option>
                </el-select>

                <div class="fr">
                    <el-button class='dr1' size="small" type="primary">导入</el-button>
                    <el-button class='dr2' size="small" type="primary">下载导入模版</el-button>
                </div>

            </div>
            </div>

            <div class="BjkbMain mt20">
                <table cellpadding="0" cellspacing="0" class="Bjkbtable">
                    <tr><th>任课</th><th>语文</th><th>数学</th><th>英语</th><th>美术</th><th>体育</th><th>音乐</th><th>科技</th></tr>
                    <tr><th>一年级一班</th><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
                    <tr><th>一年级二班</th><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
                </table>
            </div>
            
            
            </el-tab-pane>



        </el-tabs>

        <!--
        <div class="pkprocess">
            <el-steps :active="0" align-center>
                <el-step title="基础设置"></el-step>
                <el-step title="规则设置"></el-step>
                <el-step title="自动排课"></el-step>
                <el-step title="排课调整"></el-step>
                <el-step title="查看课表"></el-step>
            </el-steps>
        </div>
        -->

        <!--以下都是弹层页面-->
        <el-dialog title="添加公共时间段" :visible.sync="selpublictime" width="500px">
            <el-form :model="publictimeCheck" ref="publictimeCheck" label-width="90px">

                <el-form-item prop="selTime" resetField label="添加到" :rules="[{required: true,message: '时间段不能为空'}]">
                        <el-select v-model="publictimeCheck.selTime" placeholder="请选择">
                            <el-option
                            v-for="item in publictimeSel"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                            </el-option>
                        </el-select>
                </el-form-item>
                
                <el-form-item prop="selName" resetField label="名称" :rules="[{ required: true, message: '名称不能为空'}]">
                        <el-input v-model="publictimeCheck.selName"  placeholder="请输入名称" style="width:250px;"></el-input>
                </el-form-item>

            </el-form>

            <span slot="footer" class="dialog-footer">
                <el-button @click="selpublictime = false">取 消</el-button>
                <el-button type="primary"  @click="submitForm('publictimeCheck')">确 定</el-button>
            </span>
        </el-dialog>



        <el-dialog title="节次时间设置" :visible.sync="setkbtime" width="550px">
            <el-form :model="publictimeCheck" ref="publictimeCheck" label-width="90px">

                <div class='jcbox' v-for="item in jclist">
                    <span class="jctit">{{item.value}}</span>
                    <el-time-picker
                        is-range
                        v-model="timepicker[item.id]"
                        range-separator="至"
                        start-placeholder="开始时间"
                        end-placeholder="结束时间"
                        placeholder="选择时间范围">
                    </el-time-picker>
                </div>

                
               

            </el-form>

            <span slot="footer" class="dialog-footer">
                <el-button @click="setkbtime = false">取 消</el-button>
                <el-button type="primary"  @click="submitSetTime">确 定</el-button>
            </span>
        </el-dialog>




    </div>
</template>

<script>
var $ = require('jquery');
export default {
    name: 'home',
    data () {
        return {
            // kbtime:["0","9:00~9:45","9:00~9:45","9:00~9:45","9:00~9:45"],
            njList:[{value:1,label:"一年级"},{value:2,label:"二年级"},{value:3,label:"三年级"},{value:4,label:"四年级"},{value:5,label:"五年级"},{value:6,label:"六年级"}],
            selectNj:"",
            publictimeSel:[{value:1,label:"星期一"}],
            publictimeCheck:{selTime:'',selName:''},
            jclist:[],      //节次列表
            timepicker:[],
            weekteachnum:[],
            selTime:'',
            setkbtime:false,
            selpublictime:false,
            kbtime:11444,
            kbinfo:"",
            num1:1,
            num2:1,
            num3:1,
            cities:['星期一', '星期二', '星期三', '星期四', '星期五','星期六','星期日'],
            checkboxGroup1: ['星期一'],
            activeName: 'first',
            data2: [{
            id: 1,
            label: '一级 1',
            children: [{
                id: 4,
                label: '二级 1-1',
                children: [{
                id: 9,
                label: '三级 1-1-1'
                }, {
                id: 10,
                label: '三级 1-1-2'
                }]
            }]
            }, {
            id: 2,
            label: '一级 2',
            children: [{
                id: 5,
                label: '二级 2-1'
            }, {
                id: 6,
                label: '二级 2-2'
            }]
            }, {
            id: 3,
            label: '一级 3',
            children: [{
                id: 7,
                label: '二级 3-1'
            }, {
                id: 8,
                label: '二级 3-2'
            }]
            }],
            defaultProps: {
            children: 'children',
            label: 'label'
            },
        }
    },
    components:{
        
    },
    mounted:function(){
        $(".KbMain").on("click",".kcunit",function(){
            if($(this).hasClass("nocheck")){
                $(this).html("");
                $(this).removeClass("nocheck");
            }else{
                $(this).addClass("nocheck");
                $(this).append("<span>不排课</span>");
            }
        })

        // $(".BjkbMain").on("click",".Bjkbtable td",function(){
        //     console.log("点击了课表单元格");
        //     $(".BjkbMain td").removeClass("activ");
        //     $(".BjkbMain .choiceteachIpt").removeClass("activ");
        //     $(this).addClass("activ");
        //     if(!$(this).hasClass("hasipt")){
        //         $(this).html("<div class='choiceteachIpt'><input></div>");
        //         $(this).addClass("hasipt");
        //     }
        // })

        // $(".BjkbMain").on("click",".choiceteachIpt",function(e){
        //     e.stopPropagation();
        //     $(this).addClass("activ");
        //     console.log("点击了IPT");
        // })



    },
    methods:{
      handleClick(tab, event) {
        console.log(tab, event);
      },
      CreateKB(){
          var sumrows = parseInt(this.num1 + this.num2 +this.num3 + 1);
          var sumcols = parseInt(this.checkboxGroup1.length + 1);
        //   console.log("sumrows="+sumrows);
        //   console.log("sumcols="+sumcols);
          var pxtable = "";
          pxtable = "<table cellspacing='0' cellpadding='0' class='kbinfo'>"

          for(var i=0;i<sumrows;i++){
              pxtable = pxtable + "<tr class='kbrow"+i+"'>"
              for(var j=0;j<sumcols;j++){
                 if(i==0){
                     if(j==0){
                        pxtable = pxtable + "<th>星期/节次切换</th>"  
                     }else{
                        pxtable = pxtable + "<th>"+this.checkboxGroup1[j-1]+"</th>"  
                     }
                 }else{
                     if(j==0){
                        pxtable = pxtable + "<th>第"+(this.convertNum(i))+"节<span class='kbtime'></span></th>"
                     }else{
                        pxtable = pxtable + "<td class='kcunit'></td>"
                     }
                 } 
              }
              pxtable = pxtable + "</tr>"
          }

          pxtable = pxtable + "</table>";

          this.kbinfo = pxtable;

      },
      CreatePublicTime(){
        this.selpublictime = true;
        this.publictimeSel = [];
        var sumrows = parseInt(this.num1 + this.num2 +this.num3);
        //console.log("sumrows="+sumrows);
        for(var i=1;i<=sumrows;i++){
            console.log("i="+i)
            this.publictimeSel.push({value:"b-"+i,label:"第"+(this.convertNum(i))+"节前"})
            this.publictimeSel.push({value:"a-"+i,label:"第"+(this.convertNum(i))+"节后"})
        }
        //console.log(this.publictimeSel);

      },
      submitForm(formName) {
        var that = this;
          // console.log(this.$refs[formName]);
        this.$refs[formName].validate((valid) => {
          if (valid) {
            that.insertPublic();
            this.selpublictime = false;
          }
        });
      },
      insertPublic(){
        //console.log(this.publictimeCheck.selTime.split("-"));
        var ptobj = this.publictimeCheck;
        var ptseltime = ptobj.selTime;
        var ptselarr = ptseltime.split("-");
        var sumcols = parseInt(this.checkboxGroup1.length + 1);
        var rowindex = $(".kbrow"+ptselarr[1]).index();
        console.log("rowindex="+rowindex);
        if(ptselarr[0]=="a"){
            $(".kbinfo").find("tr").eq(rowindex).after("<tr><th class='publicTime' colspan='"+sumcols+"'>"+ptobj.selName+"<span class='kbtime'></span><i class='el-icon-close'></i></th></tr>")
        }else{
            $(".kbinfo").find("tr").eq(rowindex).before("<tr><th class='publicTime' colspan='"+sumcols+"'>"+ptobj.selName+"<span class='kbtime'></span><i class='el-icon-close'></i></th></tr>")
        }
      },
      //设置时间段
      SetKbTime(){
        this.jclist = [];
        this.setkbtime = true;
        for(var i=1;i<$(".kbinfo").find("tr").length;i++){
            var tempval = $(".kbinfo").find("tr").eq(i).children("th").eq(0).html();
            console.log("tempval="+tempval)
            this.jclist.push({value:tempval.split("<")[0],id:i-1})
        }
        //console.log(this.jclist);
      },
      //提交设置时间
      submitSetTime(){
        this.setkbtime = false;
        console.log(this.timepicker);
        for(var i=0;i<this.timepicker.length;i++){
            var s = new Date(this.timepicker[i][0]);
            var e = new Date(this.timepicker[i][1]);
            var starttime = s.getHours()+":"+s.getMinutes()+":"+s.getSeconds();
            var endtime = e.getHours()+":"+e.getMinutes()+":"+e.getSeconds()
            $(".kbinfo").find(".kbtime").eq(i).html(starttime+"~"+endtime)
        }
        
      },
      convertNum(num){
        switch(num)
        {
        case 1:
        return "一"
        break;
        case 2:
        return "二"
        break;
        case 3:
        return "三"
        break;
        case 4:
        return "四"
        break;
        case 5:
        return "五"
        break;
        case 6:
        return "六"
        break;
        case 7:
        return "七"
        break;
        case 8:
        return "八"
        break;
        case 9:
        return "九"
        break;
        case 10:
        return "十"
        break;
        default:
        return "十几"
        }
      },

    }
}
</script>

<style>

.view{width:100%; height:100%;}
</style>