import {BasicColumn} from '/@/components/Table';
import {FormSchema} from '/@/components/Table';
import { rules} from '/@/utils/helper/validator';
import { render } from '/@/utils/common/renderUtils';
import {JVxeTypes,JVxeColumn} from '/@/components/jeecg/JVxeTable/types'
//列表数据
export const columns: BasicColumn[] = [
   {
    title: '需求名称',
    align:"center",
    dataIndex: 'name'
   },
   {
    title: '需求描述',
    align:"center",
    dataIndex: 'description'
   },
];
//查询数据
export const searchFormSchema: FormSchema[] = [
	{
      label: "需求名称",
      field: "name",
      component: 'Input',
      //colProps: {span: 6},
 	},
];
//表单数据
export const formSchema: FormSchema[] = [
  {
    label: '需求名称',
    field: 'name',
    component: 'Input',
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入需求名称!'},
          ];
     },
  },
  {
    label: '需求描述',
    field: 'description',
    component: 'Input',
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入需求描述!'},
          ];
     },
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
export const requirementDefineLevelColumns: JVxeColumn[] = [
    {
      title: '这一级的名称',
      key: 'name',
      type: JVxeTypes.input,
      width:"200px",
      placeholder: '请输入${title}',
      defaultValue:'',
        validateRules: [
          { required: true, message: '${title}不能为空' },
        ],
    },
    {
      title: '等级',
      key: 'level',
      type: JVxeTypes.inputNumber,
      width:"200px",
      placeholder: '请输入${title}',
      defaultValue:'',
    },
    {
      title: '等级描述',
      key: 'description',
      type: JVxeTypes.input,
      width:"200px",
      placeholder: '请输入${title}',
      defaultValue:'',
        validateRules: [
          { required: true, message: '${title}不能为空' },
        ],
    },
  ]


// 高级查询数据
export const superQuerySchema = {
  name: {title: '需求名称',order: 0,view: 'text', type: 'string',},
  description: {title: '需求描述',order: 1,view: 'text', type: 'string',},
  //子表高级查询
  requirementDefineLevel: {
    title: '要求定义的具体条目',
    view: 'table',
    fields: {
        name: {title: '这一级的名称',order: 0,view: 'text', type: 'string',},
        level: {title: '等级',order: 1,view: 'number', type: 'number',},
        description: {title: '等级描述',order: 2,view: 'text', type: 'string',},
        rdId: {title: '需求定义ID',order: 3,view: 'text', type: 'string',},
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
