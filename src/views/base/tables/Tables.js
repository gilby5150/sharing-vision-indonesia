import React from 'react'
import {
  CBadge,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CDataTable,
  CRow,
  CButton
} from '@coreui/react'
import { DocsLink } from 'src/reusable'

import usersData from '../../users/UsersData'

// const getBadge = status => {
//   switch (status) {
//     case 'Active': return 'success'
//     case 'Inactive': return 'secondary'
//     case 'Pending': return 'warning'
//     case 'Banned': return 'danger'
//     default: return 'primary'
//   }
// }
const fields = ['userName','name', 'password']

const Tables = () => {
  return (
    <>  
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
                  items={usersData}
                  fields={fields}
                  itemsPerPage={5}
                  pagination
                  // scopedSlots = {{
                  //   'status':
                  //     (item)=>(
                  //       <td>
                  //         <CBadge color={getBadge(item.status)}>
                  //           {item.status}
                  //         </CBadge>
                  //       </td>
                  //     )

                  // }}
                />
                </CCol>
              </CRow>
              <CRow>
                <CCol xs="12" lg="6">
                  <CButton
                    color="primary"
                    className={'mb-1'}
                  >
                    Create User
                  </CButton>
                </CCol>
                <CCol xs="12" lg="6">
                  <CButton
                    color="danger"
                    className={'mb-1'}
                  >
                    Delete User
                  </CButton>
                </CCol>
              </CRow>
            </CCardBody>
          </CCard>
        </CCol>

        {/* <CCol xs="12" lg="6">
          <CCard>
            <CCardHeader>
              Striped Table
            </CCardHeader>
            <CCardBody>
            <CDataTable
              items={usersData}
              fields={fields}
              striped
              itemsPerPage={5}
              pagination
              scopedSlots = {{
                'status':
                  (item)=>(
                    <td>
                      <CBadge color={getBadge(item.status)}>
                        {item.status}
                      </CBadge>
                    </td>
                  )

              }}
            />
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>

      <CRow>

        <CCol xs="12" lg="6">
          <CCard>
            <CCardHeader>
              Condensed Table
            </CCardHeader>
            <CCardBody>
            <CDataTable
              items={usersData}
              fields={fields}
              size="sm"
              itemsPerPage={5}
              pagination
              scopedSlots = {{
                'status':
                  (item)=>(
                    <td>
                      <CBadge color={getBadge(item.status)}>
                        {item.status}
                      </CBadge>
                    </td>
                  )

              }}
            />
            </CCardBody>
          </CCard>
        </CCol>

        <CCol xs="12" lg="6">
          <CCard>
            <CCardHeader>
              Bordered Table
            </CCardHeader>
            <CCardBody>
            <CDataTable
              items={usersData}
              fields={fields}
              bordered
              itemsPerPage={5}
              pagination
              scopedSlots = {{
                'status':
                  (item)=>(
                    <td>
                      <CBadge color={getBadge(item.status)}>
                        {item.status}
                      </CBadge>
                    </td>
                  )

              }}
            />
            </CCardBody>
          </CCard>
        </CCol>

      </CRow>

      <CRow>
        <CCol>
          <CCard>
            <CCardHeader>
              Combined All Table
            </CCardHeader>
            <CCardBody>
            <CDataTable
              items={usersData}
              fields={fields}
              hover
              striped
              bordered
              size="sm"
              itemsPerPage={10}
              pagination
              scopedSlots = {{
                'status':
                  (item)=>(
                    <td>
                      <CBadge color={getBadge(item.status)}>
                        {item.status}
                      </CBadge>
                    </td>
                  )
              }}
            />
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
        <CRow>
        <CCol>
          <CCard>
            <CCardHeader>
              Combined All dark Table
            </CCardHeader>
            <CCardBody>
            <CDataTable
              items={usersData}
              fields={fields}
              dark
              hover
              striped
              bordered
              size="sm"
              itemsPerPage={10}
              pagination
              scopedSlots = {{
                'status':
                  (item)=>(
                    <td>
                      <CBadge color={getBadge(item.status)}>
                        {item.status}
                      </CBadge>
                    </td>
                  )
              }}
            />
            </CCardBody>*/}
            {/* </CCard>  */}
        {/* </CCol> */}
      </CRow>
    </>
  )
}

export default Tables
