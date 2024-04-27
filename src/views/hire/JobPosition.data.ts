import {BasicColumn} from '/@/components/Table';
import {FormSchema} from '/@/components/Table';
import { rules} from '/@/utils/helper/validator';
import { render } from '/@/utils/common/renderUtils';
import {JVxeTypes,JVxeColumn} from '/@/components/jeecg/JVxeTable/types'
//列表数据
export const columns: BasicColumn[] = [
   {
    title: '名称',
    align:"center",
    dataIndex: 'title'
   },
   {
    title: '地点',
    align:"center",
    dataIndex: 'location'
   },
   {
    title: '部门',
    align:"center",
    dataIndex: 'department'
   },
   {
    title: '详细地址',
    align:"center",
    dataIndex: 'detailUrl'
   },
   {
    title: '备注',
    align:"center",
    dataIndex: 'remark'
   },
   {
    title: '薪资最低',
    align:"center",
    dataIndex: 'salaryStart'
   },
   {
    title: '薪资最高',
    align:"center",
    dataIndex: 'salaryEnd'
   },
];
//查询数据
export const searchFormSchema: FormSchema[] = [
];
//表单数据
export const formSchema: FormSchema[] = [
  {
    label: '名称',
    field: 'title',
    component: 'Input',
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入名称!'},
          ];
     },
  },
  {
    label: '地点',
    field: 'location',
    component: 'Input',
  },
  {
    label: '部门',
    field: 'department',
    component: 'Input',
  },
  {
    label: '详细地址',
    field: 'detailUrl',
    component: 'Input',
  },
  {
    label: '备注',
    field: 'remark',
    component: 'Input',
  },
  {
    label: '薪资最低',
    field: 'salaryStart',
    component: 'InputNumber',
  },
  {
    label: '薪资最高',
    field: 'salaryEnd',
    component: 'InputNumber',
  },
	// TODO 主键隐藏字段，目前写死为ID
	{
	  label: '',
	  field: 'id',
	  component: 'Input',
	  show: false
	},
];
//子表单数据
//子表表格配置
export const jobPositionRequirementColumns: JVxeColumn[] = [
    {
      title: '需求ID',
      key: 'rdId',
      type: JVxeTypes.input,
      width:"200px",
      placeholder: '请输入${title}',
      defaultValue:'',
        validateRules: [
          { required: true, message: '${title}不能为空' },
        ],
    },
    {
      title: '需求等级ID',
      key: 'levelId',
      type: JVxeTypes.input,
      width:"200px",
      placeholder: '请输入${title}',
      defaultValue:'',
        validateRules: [
          { required: true, message: '${title}不能为空' },
        ],
    },
    {
      title: '数值',
      key: 'numValue',
      type: JVxeTypes.inputNumber,
      width:"200px",
      placeholder: '请输入${title}',
      defaultValue:'',
    },
    {
      title: '备注',
      key: 'remark',
      type: JVxeTypes.input,
      width:"200px",
      placeholder: '请输入${title}',
      defaultValue:'',
    },
  ]


// 高级查询数据
export const superQuerySchema = {
  title: {title: '名称',order: 0,view: 'text', type: 'string',},
  location: {title: '地点',order: 1,view: 'text', type: 'string',},
  department: {title: '部门',order: 2,view: 'text', type: 'string',},
  detailUrl: {title: '详细地址',order: 3,view: 'text', type: 'string',},
  remark: {title: '备注',order: 4,view: 'text', type: 'string',},
  salaryStart: {title: '薪资最低',order: 5,view: 'number', type: 'number',},
  salaryEnd: {title: '薪资最高',order: 6,view: 'number', type: 'number',},
  //子表高级查询
  jobPositionRequirement: {
    title: '工作要求',
    view: 'table',
    fields: {
        jobId: {title: '岗位ID',order: 0,view: 'text', type: 'string',},
        rdId: {title: '需求ID',order: 1,view: 'text', type: 'string',},
        levelId: {title: '需求等级ID',order: 2,view: 'text', type: 'string',},
        numValue: {title: '数值',order: 3,view: 'number', type: 'number',},
        remark: {title: '备注',order: 4,view: 'text', type: 'string',},
    }
  },
};

/**
* 流程表单调用这个方法获取formSchema
* @param param
*/
export function getBpmFormSchema(_formData): FormSchema[]{
// 默认和原始表单保持一致 如果流程中配置了权限数据，这里需要单独处理formSchema
  return formSchema;
}
