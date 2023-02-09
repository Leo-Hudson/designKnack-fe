import React from 'react'
import { ContentBox, Section } from "../../components/Banners"
import styled from "styled-components"
import getInTouch from '../../assets/backgrounds/getInTouch.webp'
import { Formik, Form } from 'formik'
import { FieldInput, TextAreaField } from '../../components/FormikInputs'
import { getInTouchFormValidate } from '../../helpers/forms/validateForms'

import { PrimaryButton } from '../../components/Buttons'
import { arrowForward } from '../../assets/icons'
import { box3d } from '../../assets/icons'
import { Label } from '../../components/Inputs'
import SectionHeader from '../../components/SectionHeader'


const GetTouchSection = styled(Section)`
    position:relative;
    .box3d{
        position:absolute;
        right:4vw;
        top:3vw;
        z-index:0;
    }
`

const Content = styled.div`
    position:relative;
    z-index:1;
    padding-block:70px 149px;
    
`

const FormBox = styled.div`
    min-height:400px;
    /* background:cyan; */
    width:100%;
    display:grid;
    grid-template-columns:1fr 1fr;
    place-items:center;
    gap:50px;
    
    div{
        width:100%;
    }
    .imageBox{
        min-height:100px;
        max-width:706px ;
        display:grid;
        place-content:center;
    }

    .form{
        max-width:761px ;
        padding : 2vw;
        box-shadow:0px 0px 40px rgba(0,0,0,0.1);
        border-radius:10px;
    }

`

const FormRow = styled.div`
    margin-bottom:30px;
    button{
        width:100%;
        display:flex;
        gap:10px;
        justify-content:center;
        align-items:center;
    }
    
`

function GetInTouch() {
    return (
        <GetTouchSection>
            <img src={box3d} alt="" className='box3d' width="100px" height="auto" />
            <ContentBox>
                <Content>
                    <SectionHeader
                        mainHeading="GET IN TOUCH"
                        heading="Let's Build Something "
                        secondHeading="Amazing Together"
                        para="Whether it's a brand refresh, public relations push, new website or end-to-end behavior change campaign — we're interested and ready to talk solutions."
                        boxStyle={
                            {
                                headingWidth: "260px",
                            }
                        }
                    />
                    <FormBox>
                        <div className='imageBox'>
                            <img src={getInTouch} alt="" width="100%" height="" />
                        </div>
                        <div>
                            <Formik
                                initialValues={{
                                    fullName: '',
                                    email: '',
                                    phoneNo: '',
                                    aboutProject: '',
                                }}
                                validationSchema={getInTouchFormValidate}
                                onSubmit={values => {
                                    console.log(values);
                                    // setLoader(true);
                                    // dispatch(PostLogin(values));
                                }}
                            >
                                {formik => (
                                    <div className='form'>
                                        <Form autoComplete="off"> {/*Formik Form Import from Formik*/}

                                            <FormRow>
                                                <FieldInput
                                                    label="Full Name*"
                                                    id="fullName" autofill name="fullName" type="text"
                                                    placeholder="Enter your Full Name"
                                                    required
                                                    style={{ fontSize: '20px' }}
                                                />
                                            </FormRow>
                                            <FormRow>
                                                <FieldInput
                                                    label="Email Address*"
                                                    id="email" autofill name="email" type="email"
                                                    placeholder="Enter your Email"
                                                    required
                                                    style={{ fontSize: '20px' }}
                                                />
                                            </FormRow>
                                            <FormRow>
                                                <FieldInput
                                                    label="Phone No*"
                                                    id="phoneNo" autofill name="phoneNo" type="text"
                                                    placeholder="Enter your Phone No"
                                                    required
                                                    style={{ fontSize: '20px' }}
                                                />
                                            </FormRow>
                                            <FormRow>
                                                <Label htmlFor='aboutProject'>Tell us about your project*</Label>
                                                <TextAreaField
                                                    label="Tell us about your project*"
                                                    id="aboutProject" name="aboutProject" placeholder="Discuss your business/idea..."
                                                    required rows='5'
                                                    style={{ fontSize: '20px', marginTop:'4px' }}
                                                />
                                            </FormRow>
                                            <FormRow>
                                                <PrimaryButton type="submit">
                                                    <span>SUBMIT</span>
                                                    <img src={arrowForward} alt="" width="7px" />

                                                </PrimaryButton>
                                            </FormRow>
                                        </Form>
                                    </div>
                                )}
                            </Formik>
                        </div>
                    </FormBox>
                </Content>
            </ContentBox>
        </GetTouchSection>
    )
}

export default GetInTouch
