import React, { PureComponent } from 'react'
import { connect } from 'dva'
import { Form, Input, DatePicker, Icon, Tooltip, Button } from 'antd'

import styles from './style.less'

const FormItem = Form.Item
const { RangePicker } = DatePicker
const { TextArea } = Input

class BasicForms extends PureComponent {
  handleSubmit= (e) => {
    e.preventDefault()
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        this.props.dispatch({
          type: 'form/submitRegualrForm',
          payload: values,
        })
      }
    })
  }
  render() {
    const { submitting } = this.props
    const { getFieldDecorator, getFieldValue } = this.props.form
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 7 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 12 },
        md: { span: 10 },
      },
    }
    const submitFormLayout = {
      wrapperCol: {
        xs: { span: 24, offset: 0 },
        sm: { span: 10, offset: 7 }
      },
    }
    return (
      <Form
        onSubmit={this.handleSubmit}
        hideRequiredMark
        style={{ marginTop: 8 }}
      >
        <FormItem
          {...formItemLayout}
          label="标题"
        >
          {getFieldDecorator('title', {
            rules: [{
              required: true, message: '请输入标题',
            }],
          })(
            <Input placeholder="给目标起个名字" />
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="起止日期"
        >
          {getFieldDecorator('date', {
            rules: [{
              required: true, message: '请选择起始日期',
            }],
          })(
            <RangePicker style={{ width: '100%' }} placeholder={['开始日期', '结束日期']} />
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="目标描述"
        >
          {getFieldDecorator('goal', {
            rules: [{
              required: true, message: '请输入目标描述',
            }],
          })(
            <TextArea style={{ minHeght: 32 }} placeholder="请输入你的阶段性工作目标" rows={4} />
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="衡量标准"
        >
          {getFieldDecorator('standard', {
            rules: [{
              required: true, message: '请输入衡量标准',
            }],
          })(
            <TextArea style={{ minHeght: 32 }} placeholder="请输入衡量标准" rows={4} />
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label={
            <span>
              客户
              <em className={styles.optional}>
                (选填)
              </em>
              <Tooltip title="目标的服务对象">
                <Icon type="info-circle-o" style={{ marginRight: 4 }}/>
              </Tooltip>
            </span>
          }
        >
          {getFieldDecorator('client')(
            <Input placeholder="请描述你服务的用户，内部用户直接 @姓名/工号" />
          )}
        </FormItem>
        <FormItem {...submitFormLayout} style={{ marginTop: 32 }}>
          <Button type="primary" htmlType="submit" loading={submitting}>
            提交
          </Button>
          <Button style={{ marginLeft: 8 }}>保存</Button>
        </FormItem>
      </Form>
    )
  }
}

export default connect(state => ({
  submitting: state.form.regularFormSubmitting,
  // submitting: false,
}))(Form.create()(BasicForms))
