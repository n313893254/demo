import React, { PureComponent } from 'react'
import { connect } from 'dva'
import { Table } from 'antd'


export default class TableForm extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      data: props.value,
    }
  }

  render() {
    const columns = [{
      title: '成员姓名',
      dataIndex: 'name',
      key: 'name',
      width: '20%',
    }, {
      title: '工号',
      dataIndex: 'workId',
      key: 'workId',
      width: '20%',
    }, {
      title: '所属部门',
      dataIndex: 'department',
      key: 'department',
      width: '20%',
    }, {
      title: '操作',
      key: 'action',
    }]
    return (
      <div>
        <Table
          columns={columns}
          dataSource={this.state.data}
          pagination={false}
        />
      </div>
    )
  }
}
