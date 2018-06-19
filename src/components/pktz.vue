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
            <div class="pkstep activ">
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
    
        <el-tab-pane label="按班级调课" name="first">
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
                <div class="statInfoTips fr">
                    <span class="stattip stat_1">当前选中的课程</span>
                    <span class="stattip stat_2">可对调课程</span>
                    <span class="stattip stat_3">可安排，但不可对调，目的课程将移入暂存区</span>
                </div>
            </el-row>
            <el-row>
                <table cellpadding="0" cellspacing="0" class="gentable fl mt10 tzkcTable">
                    <tr><th class="xh"></th><th>星期一</th><th>星期二</th><th>星期三</th><th>星期四</th><th>星期五</th></tr>
                    <tr><td class="xh">1</td><td><span>语文</span></td><td><span class="stat_1">英语</span></td><td><span>语文</span></td><td></td><td></td></tr>
                    <tr><td class="xh">2</td><td><span>语文</span></td><td><span class="stat_2">数学</span></td><td><span>语文</span></td><td></td><td></td></tr>
                    <tr><td class="xh">3</td><td><span>语文</span></td><td><span class="stat_3">体育</span></td><td><span>语文</span></td><td></td><td></td></tr>
                    <tr><td class="xh">4</td><td><span>语文</span></td><td><span class="stat_3">体育</span></td><td><span>语文</span></td><td></td><td></td></tr>
                    <tr><td class="xh"></td><td></td><td></td><td></td><td></td><td></td></tr>
                    <tr><td class="xh">5</td><td><span>语文</span></td><td><span class="stat_1">英语</span></td><td><span>语文</span></td><td></td><td></td></tr>
                    <tr><td class="xh">6</td><td><span>语文</span></td><td><span class="stat_2">数学</span></td><td><span>语文</span></td><td></td><td></td></tr>
                    <tr><td class="xh">7</td><td><span>语文</span></td><td><span class="stat_3">体育</span></td><td><span>语文</span></td><td></td><td></td></tr>
                    <tr><td class="xh">8</td><td><span>语文</span></td><td><span class="stat_3">体育</span></td><td><span>语文</span></td><td></td><td></td></tr>
                    <tr>
                        <th class="xh">暂<br>存<br>区</th><th colspan="5" class="zcq">
                            <span class="stat_1">语文</span>
                            <span class="stat_2">语文</span>
                            <span class="stat_3">语文</span>
                            <span class="stat_1">语文</span>
                            <span class="stat_3">语文</span>
                            <span class="stat_1">语文</span>
                            <span>语文</span>
                        </th>
                    </tr>
                </table>
            </el-row>
            <el-row class="tzteachbox mt30">
                <el-col :span="12" class="tzteachUnit">
                    <div class="tzteachtit">所选课程的教师课表</div>
                    <table cellpadding="0" cellspacing="0" class="gentable fl mt10 tzkcTable">
                        <tr><th class="xh"></th><th>星期一</th><th>星期二</th><th>星期三</th><th>星期四</th><th>星期五</th></tr>
                        <tr><td class="xh">1</td><td><span>语文</span></td><td><span class="stat_1">英语</span></td><td><span>语文</span></td><td></td><td></td></tr>
                        <tr><td class="xh">2</td><td><span>语文</span></td><td><span class="stat_2">数学</span></td><td><span>语文</span></td><td></td><td></td></tr>
                        <tr><td class="xh">3</td><td><span>语文</span></td><td><span class="stat_3">体育</span></td><td><span>语文</span></td><td></td><td></td></tr>
                        <tr><td class="xh">4</td><td><span>语文</span></td><td><span class="stat_3">体育</span></td><td><span>语文</span></td><td></td><td></td></tr>
                        <tr><td class="xh"></td><td></td><td></td><td></td><td></td><td></td></tr>
                        <tr><td class="xh">5</td><td><span>语文</span></td><td><span class="stat_1">英语</span></td><td><span>语文</span></td><td></td><td></td></tr>
                        <tr><td class="xh">6</td><td><span>语文</span></td><td><span class="stat_2">数学</span></td><td><span>语文</span></td><td></td><td></td></tr>
                        <tr><td class="xh">7</td><td><span>语文</span></td><td><span class="stat_3">体育</span></td><td><span>语文</span></td><td></td><td></td></tr>
                        <tr><td class="xh">8</td><td><span>语文</span></td><td><span class="stat_3">体育</span></td><td><span>语文</span></td><td></td><td></td></tr> 
                    </table>
                </el-col>
                <el-col :span="12" class="tzteachUnit">
                    <div class="tzteachtit">被调课程教师课表</div>
                    <table cellpadding="0" cellspacing="0" class="gentable fl mt10 tzkcTable">
                        <tr><th class="xh"></th><th>星期一</th><th>星期二</th><th>星期三</th><th>星期四</th><th>星期五</th></tr>
                        <tr><td class="xh">1</td><td><span>语文</span></td><td><span class="stat_1">英语</span></td><td><span>语文</span></td><td></td><td></td></tr>
                        <tr><td class="xh">2</td><td><span>语文</span></td><td><span class="stat_2">数学</span></td><td><span>语文</span></td><td></td><td></td></tr>
                        <tr><td class="xh">3</td><td><span>语文</span></td><td><span class="stat_3">体育</span></td><td><span>语文</span></td><td></td><td></td></tr>
                        <tr><td class="xh">4</td><td><span>语文</span></td><td><span class="stat_3">体育</span></td><td><span>语文</span></td><td></td><td></td></tr>
                        <tr><td class="xh"></td><td></td><td></td><td></td><td></td><td></td></tr>
                        <tr><td class="xh">5</td><td><span>语文</span></td><td><span class="stat_1">英语</span></td><td><span>语文</span></td><td></td><td></td></tr>
                        <tr><td class="xh">6</td><td><span>语文</span></td><td><span class="stat_2">数学</span></td><td><span>语文</span></td><td></td><td></td></tr>
                        <tr><td class="xh">7</td><td><span>语文</span></td><td><span class="stat_3">体育</span></td><td><span>语文</span></td><td></td><td></td></tr>
                        <tr><td class="xh">8</td><td><span>语文</span></td><td><span class="stat_3">体育</span></td><td><span>语文</span></td><td></td><td></td></tr> 
                    </table>
                </el-col>
            </el-row>
        </el-tab-pane>

        <el-tab-pane label="按教师调课" name="second">
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
                    <el-select v-model="selval3[0]" placeholder="请选择教师" style="width:150px;margin:0 5px;">
                        <el-option
                        v-for="item in seldata3"
                        :label="item.label"
                        :value="item.value">
                        </el-option>
                    </el-select>
                </div>
                <div class="statInfoTips fr">
                    <span class="stattip stat_1">当前选中的课程</span>
                    <span class="stattip stat_2">可对调课程</span>
                    <span class="stattip stat_3">可安排，但不可对调，目的课程将移入暂存区</span>
                </div>
            </el-row>
            <el-row>
                <table cellpadding="0" cellspacing="0" class="gentable fl mt10 tzkcTable">
                    <tr><th class="xh"></th><th>星期一</th><th>星期二</th><th>星期三</th><th>星期四</th><th>星期五</th></tr>
                    <tr><td class="xh">1</td><td><span>1班-语文</span></td><td><span class="stat_1">1班-英语</span></td><td><span>1班-语文</span></td><td></td><td></td></tr>
                    <tr><td class="xh">2</td><td><span>6班-语文</span></td><td><span class="stat_2">1班-数学</span></td><td><span>1班-语文</span></td><td></td><td></td></tr>
                    <tr><td class="xh">3</td><td><span>1班-语文</span></td><td><span class="stat_3">6班-体育</span></td><td><span>1班-语文</span></td><td></td><td></td></tr>
                    <tr><td class="xh">4</td><td><span>1班-语文</span></td><td><span class="stat_3">6班-体育</span></td><td><span>1班-语文</span></td><td></td><td></td></tr>
                    <tr><td class="xh"></td><td></td><td></td><td></td><td></td><td></td></tr>
                    <tr><td class="xh">5</td><td><span>1班-语文</span></td><td><span class="stat_1">6班-英语</span></td><td><span>1班-语文</span></td><td></td><td></td></tr>
                    <tr><td class="xh">6</td><td><span>1班-语文</span></td><td><span class="stat_2">6班-数学</span></td><td><span>1班-语文</span></td><td></td><td></td></tr>
                    <tr><td class="xh">7</td><td><span>1班-语文</span></td><td><span class="stat_3">6班-体育</span></td><td><span>1班-语文</span></td><td></td><td></td></tr>
                    <tr><td class="xh">8</td><td><span>1班-语文</span></td><td><span class="stat_3">6班-体育</span></td><td><span>1班-语文</span></td><td></td><td></td></tr>
                    <tr>
                        <th class="xh">暂<br>存<br>区</th><th colspan="5" class="zcq">
                            <span class="stat_1">1班-语文</span>
                            <span class="stat_2">1班-语文</span>
                            <span class="stat_3">1班-语文</span>
                            <span class="stat_1">1班-语文</span>
                            <span class="stat_3">1班-语文</span>
                            <span class="stat_1">1班-语文</span>
                        </th>
                    </tr>
                </table>
            </el-row>
            <el-row class="tzteachbox mt30">
                <el-col :span="12" class="tzteachUnit">
                    <div class="tzteachtit">张晓琳-教师课表</div>
                    <table cellpadding="0" cellspacing="0" class="gentable fl mt10 tzkcTable">
                        <tr><th class="xh"></th><th>星期一</th><th>星期二</th><th>星期三</th><th>星期四</th><th>星期五</th></tr>
                        <tr><td class="xh">1</td><td><span>1班-语文</span></td><td><span class="stat_1">1班-英语</span></td><td><span>1班-语文</span></td><td></td><td></td></tr>
                        <tr><td class="xh">2</td><td><span>1班-语文</span></td><td><span class="stat_2">1班-数学</span></td><td><span>1班-语文</span></td><td></td><td></td></tr>
                        <tr><td class="xh">3</td><td><span>1班-语文</span></td><td><span class="stat_3">1班-体育</span></td><td><span>1班-语文</span></td><td></td><td></td></tr>
                        <tr><td class="xh">4</td><td><span>1班-语文</span></td><td><span class="stat_3">1班-体育</span></td><td><span>1班-语文</span></td><td></td><td></td></tr>
                        <tr><td class="xh"></td><td></td><td></td><td></td><td></td><td></td></tr>
                        <tr><td class="xh">5</td><td><span>1班-语文</span></td><td><span class="stat_1">1班-英语</span></td><td><span>1班-语文</span></td><td></td><td></td></tr>
                        <tr><td class="xh">6</td><td><span>1班-语文</span></td><td><span class="stat_2">1班-数学</span></td><td><span>1班-语文</span></td><td></td><td></td></tr>
                        <tr><td class="xh">7</td><td><span>1班-语文</span></td><td><span class="stat_3">1班-体育</span></td><td><span>1班-语文</span></td><td></td><td></td></tr>
                        <tr><td class="xh">8</td><td><span>1班-语文</span></td><td><span class="stat_3">1班-体育</span></td><td><span>1班-语文</span></td><td></td><td></td></tr> 
                    </table>
                </el-col>
                <el-col :span="12" class="tzteachUnit">
                    <div class="tzteachtit">六年级6班-班3级课表</div>
                    <table cellpadding="0" cellspacing="0" class="gentable fl mt10 tzkcTable">
                        <tr><th class="xh"></th><th>星期一</th><th>星期二</th><th>星期三</th><th>星期四</th><th>星期五</th></tr>
                        <tr><td class="xh">1</td><td><span>语文</span></td><td><span class="stat_1">英语</span></td><td><span>语文</span></td><td></td><td></td></tr>
                        <tr><td class="xh">2</td><td><span>语文</span></td><td><span class="stat_2">数学</span></td><td><span>语文</span></td><td></td><td></td></tr>
                        <tr><td class="xh">3</td><td><span>语文</span></td><td><span class="stat_3">体育</span></td><td><span>语文</span></td><td></td><td></td></tr>
                        <tr><td class="xh">4</td><td><span>语文</span></td><td><span class="stat_3">体育</span></td><td><span>语文</span></td><td></td><td></td></tr>
                        <tr><td class="xh"></td><td></td><td></td><td></td><td></td><td></td></tr>
                        <tr><td class="xh">5</td><td><span>语文</span></td><td><span class="stat_1">英语</span></td><td><span>语文</span></td><td></td><td></td></tr>
                        <tr><td class="xh">6</td><td><span>语文</span></td><td><span class="stat_2">数学</span></td><td><span>语文</span></td><td></td><td></td></tr>
                        <tr><td class="xh">7</td><td><span>语文</span></td><td><span class="stat_3">体育</span></td><td><span>语文</span></td><td></td><td></td></tr>
                        <tr><td class="xh">8</td><td><span>语文</span></td><td><span class="stat_3">体育</span></td><td><span>语文</span></td><td></td><td></td></tr> 
                    </table>
                </el-col>
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
        selval1:[],
        selval2:[],
        selval3:[],
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
