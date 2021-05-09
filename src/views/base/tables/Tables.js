import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { SVIServices } from './../../../service';
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CDataTable,
  CRow,
  CButton
} from '@coreui/react'

class Tables extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // language: localStorage.getItem('language'),
      // selectedKeys: 0,
      dataProductType: [],
      // productSelected: [],
    };
  }

  componentDidMount() {
    SVIServices.getProductType()
    .then(res => {
      // console.log(res)
      this.setState({
        dataProductType: res.data.data,
        // productSelected: res.data.data[this.state.selectedKeys],
      })
    })
  }

  deleteOrder(index) {
    let dataProductType = this.state.dataProductType
    dataProductType.splice(index, 1)
    localStorage.setItem("dataProductType", JSON.stringify(dataProductType))
    this.setState({ dataProductType })
  }

  render(){
    const { dataProductType } = this.state
    return (
      <>  
      <h1 className="text-left">User Management</h1>
        <CRow>
          <CCol>
            <CCard>
              <CCardHeader>
                Data User
              </CCardHeader>
              <CCardBody>
                <CRow>
                  <CCol>
                  <CDataTable
                    items={dataProductType}
                    fields={[
                      'username',
                      'name',
                      'password',
                      {
                        key: 'actions',
                        label: '',
                        _style: { width: '1%' },
                        sorter: false,
                        filter: false
                      }
                    ]}
                    itemsPerPage={5}
                    pagination
                    scopedSlots = {{
                      'actions':
                      (index)=>{
                        return (
                          <td className="py-2">
                            <CButton
                              color="danger"
                              // variant="outline"
                              // shape="square"
                              className="me-md-2"
                              size="sm"
                              onClick={() => this.deleteOrder(index)}
                            >
                              Delete User
                            </CButton>
                          </td>
                          )
                      }
                    }}
                  />
                  </CCol>
                </CRow>
                <CRow>
                  <CCol>
                  <div className="d-grid d-md-flex justify-content-md-end">
                    <CButton 
                      color="primary"
                      className="me-md-2" 
                      href="#/base/forms"
                    >
                      Create User
                    </CButton>
                  </div>
                  </CCol>
                </CRow>
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
      </>
    )
  }
}
export default withRouter(Tables)
