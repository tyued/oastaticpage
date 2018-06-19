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
            <div class="pkstep activ">
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

    <div class="autoPkMain" v-show="step=='step1'">
        <el-button class="autoPkBtn" type="primary" size="small" @click="autopk">智能排课</el-button>
    </div>


    <div class="autoPkIng" v-show="step=='step2'">
        <i class="el-icon-loading"></i><br>
        正在排课中...
    </div>

    <div class="mask" v-show="step=='step2'"></div>

    <div class="autoPkResult" v-show="step=='step3'">
        <div class="autoResultInfo"><i class="el-icon-circle-check"></i> 排完啦！</div>
        <div class="autoResultCondition">
            <div class="Conditions">
                <ul>
                    <li>[100条“必须满足”] 全部满足</li>
                    <li>[25条“重要”] <span class='span_red'>满足了20条</span></li>
                    <li>[1条“一般”] <span class='span_red'>满足了0条</span></li>
                </ul>
                <el-button class="ckkb" type="success" size="small">查看课表</el-button>
            </div>
            <div class="UnwantedClass">
                <span @click="setUnwanted=true">不需要重新排课的班级设置（0）</span>
                <el-button @click="step='step1'" class="againkb fr"  size="small">再排一次</el-button>
            </div>
        </div>
    </div>

    <!--以下是弹层-->

    <el-dialog title="请选择不需要重新排课的班级" :visible.sync="setUnwanted" width="380px">
            
        <div class='bjbox smallscroll'>
            <el-tree  class='pkbjtree'
            :data="data1"
            show-checkbox
            node-key="id"
            :default-expanded-keys="[2, 3]"
            :default-checked-keys="[5]">
            </el-tree>
        </div>

        <span slot="footer" class="dialog-footer">
            <el-button @click="setkbtime = false">取 消</el-button>
            <el-button type="primary"  @click="submitSetUnWanted">确 定</el-button>
        </span>
    </el-dialog>


    <el-dialog title="未满足条件" :visible.sync="Unsatisfied" width="380px">
        <div class="UnsatisfiedBox smallscroll">
        <ul class="Unsatisfied">
            <li>1、张晓琳与裴钰洁，互斥，未满足。</li>
            <li>2、一年一班，体育与音乐互斥，未满足。</li>
            <li>3、张晓琳，教案齐平，未满足。</li>
            <li>4、裴钰洁，周内课程集中，未满足。</li>
        </ul>     
        </div>
    </el-dialog>

</div><!--view结尾-->


</template>

<script>
export default {
  name: 'zdpk',
   data() {
    return {
        step:"step1",
        Unsatisfied:true,
        setUnwanted:false,
        data1: [{
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
    }
  },
  mounted: function(){
    
  },
  methods:{
    submitSetUnWanted(){
        this.setUnwanted = false;
    },
    autopk(){
        var that = this;
        this.step='step2'
        setTimeout(function(){
            that.step='step3'
        },2000)
    },
  }
}
</script>

<style scope>
    #app{
        height: 100%;
    }
    .view{
        height: 100%;
        display: flex;
        flex-direction: column;
    }
    
</style>
