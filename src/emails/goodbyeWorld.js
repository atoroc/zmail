import cxs from 'cxs'
import Oy from 'oy-vey'
import React from 'react'
import styles from '../styles'
import Header from '../components/header'
import Content from '../components/content'
import Footer from '../components/footer'

const {Table, TBody, TR, TD} = Oy;

const appStyles = {
    backgroundColor: '#f7f6f5',
    fontFamily: styles.fontFamily,
}

export default React.createClass({
    render() {
        return (
            <Table width="100%" style={appStyles}>
                <TBody>
                    <TR>
                        <TD>
                            <Header/>
                            <Content>
                                {'{% if condition %}'}
                                <h1>Goodbye {'{# fullName #}'}!</h1>
                                {'{% else %}'}
                                <h1>Bye now!</h1>
                                {'{% endif %}'}
                            </Content>
                            <Footer/>
                        </TD>
                    </TR>
                </TBody>
            </Table>
        );
    }
})
