import React,{Component} from 'react'
import { withRouter } from "react-router-dom";
import { SVIServices } from "./../../../service";
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

class BasicForms extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }

  createData() {
    // this.setState({ loading: true })
    const { name, username, password } = this.state
    const data = {
      name: name,
      username: username,
      password: password,
    }

    SVIServices.authenticationLogin(data)
    .then(res => {
      // this.setState({ loading: false })
      if(res.data.success) {
        this.setState({ error: '' })
        this.props.history.push('/')
      }
      else {
        this.setState({ error: res.data.message })
      }
    },
    error => {
      if (error.response) {
        console.log(error.response)
        this.setState({ loading: false, error: error.response.data.message })
      }
    }) 
  }

  render(){

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
                <CButton
                  type="submit"
                  size="sm"
                  color="primary"
                  onClick={this.createData()}  
                >
                <CIcon name="cil-scrubber" /> Submit</CButton>
              </CCardFooter>
            </CCard>
          </CCol>
        </CRow>
      </>
    )
  }
}
export default withRouter(BasicForms)
