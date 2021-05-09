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

  Tables(){
    const { dataProductType } = this.state
    return (
      <>  
      <h1 class="text-left">User Management</h1>
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
                      ()=>{
                        return (
                          <td className="py-2">
                            <CButton
                              color="danger"
                              // variant="outline"
                              // shape="square"
                              className="me-md-2"
                              size="sm"
                              // onClick={()=>{toggleDetails(index)}}
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
                  <div class="d-grid d-md-flex justify-content-md-end">
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
