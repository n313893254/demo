import React, { PureComponent } from 'react'
import { connect } from 'dva'
import { Card, Form } from 'antd'
import styles from './style.less'
import TableForm from './TableForm'

const tableData = []

class AdvancedForm extends PureComponent {
  render() {
    const { form, dispatch, submitting } = this.props
    const { getFieldDecorator, validateFieldsAndScroll, getFieldsError } = form
    return (
      <Card title="成员管理" className={styles.card} bordered={false}>
        {getFieldDecorator('members', {
          initialValue: tableData,
        })(<TableForm />)}
      </Card>
    )
  }
}

export default connect(state => ({
  currentUser: '',
}))(Form.create()(AdvancedForm))
