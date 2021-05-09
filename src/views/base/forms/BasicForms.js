import React from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CForm,
  CFormGroup,
  CFormText,
  CInput,
  CLabel,
  CRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
// import { DocsLink } from 'src/reusable'

const BasicForms = () => {
  // const [collapsed, setCollapsed] = React.useState(true)
  // const [showElements, setShowElements] = React.useState(true)

  return (
    <>
    <h1 class="text-left">Form Create User Management</h1>
      <CRow>
        <CCol>
          <CCard>
            <CCardHeader>
              Horizontal
              <small> Form</small>
            </CCardHeader>
            <CCardBody>
              <CForm action="" method="post" className="form-horizontal">
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="hf-name">Name</CLabel>
                  </CCol>
                  <CCol xs="auto">
                    <CInput type="input" id="hf-name" name="hf-name" placeholder="Enter Name..." autoComplete="name"/>
                    <CFormText className="help-block">Please enter your name</CFormText>
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="hf-userName">User Name</CLabel>
                  </CCol>
                  <CCol xs="auto">
                    <CInput type="input" id="hf-userName" name="hf-email" placeholder="Enter User Name..." autoComplete="userName"/>
                    <CFormText className="help-block">Please enter your user name</CFormText>
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="hf-password">Password</CLabel>
                  </CCol>
                  <CCol xs="auto">
                    <CInput type="password" id="hf-password" name="hf-password" placeholder="Enter Password..." autoComplete="current-password"/>
                    <CFormText className="help-block">Please enter your password</CFormText>
                  </CCol>
                </CFormGroup>
              </CForm>
            </CCardBody>
            <CCardFooter>
              <CButton type="submit" size="sm" color="primary"><CIcon name="cil-scrubber" /> Submit</CButton> <CButton type="reset" size="sm" color="danger"><CIcon name="cil-ban" /> Reset</CButton>
            </CCardFooter>
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default BasicForms
