import './style.css'

export function SingleTopic(props) {
    return(
        <p className={props.nameP}><a className={props.nameA} href={props.url}>{props.content}</a></p>


    )
    

}

export function Topics(props){
    return(
        <section className={props.sectionClass}>
            <ul className={props.ulClass}>
                <li className={props.liClass}>
                    <SingleTopic 
                    nameP='aboutPage'
                    nameA='aboutPageA allATags'
                    url='https://about.instagram.com/'
                    content='about'

                    />

                </li>

                <li className={props.liClass}>
                    <SingleTopic
                        nameP='helpPage'
                        nameA='helpPageA allATags'
                        url='https://help.instagram.com/'
                        content='help'
                    ></SingleTopic>

                </li>
                <li className={props.liClass}>
                    <SingleTopic
                        nameP='pressPage'
                        nameA='pressPageA allATags'
                        url='https://about.instagram.com/blog/'
                        content='press'
                    ></SingleTopic>              
     
                </li>
                <li className={props.liClass}>
                    <SingleTopic
                        nameP='apiPage'
                        nameA='apiPageA allATags'
                        url='https://developers.facebook.com/docs/instagram'
                        content='api'
                    ></SingleTopic>

                </li>
                <li className={props.liClass}>
                    <SingleTopic
                        nameP='jobsPage'
                        nameA='jobsPageA allATags'
                        url='https://about.instagram.com/about-us/careers'
                        content='jobs'
                    ></SingleTopic>


                </li>
                <li className={props.liClass}>
                    <SingleTopic
                        nameP='privacyPage'
                        nameA='privacyPageA allATags'
                        url='https://www.instagram.com/legal/privacy/'
                        content='privacy'
                    ></SingleTopic>


                </li>
                <li className={props.liClass}>
                    <SingleTopic
                        nameP='termsPage'
                        nameA='termsPageA allATags'
                        url='https://www.instagram.com/legal/terms/'
                        content='terms'
                    ></SingleTopic>


                </li>
                <li className={props.liClass}>
                    <SingleTopic
                        nameP='locationsPage'
                        nameA='locationsPageA allATags'
                        url='https://www.instagram.com/explore/locations/'
                        content='locations'
                    ></SingleTopic>   


                </li>
                <li className={props.liClass}>
                    <SingleTopic
                        nameP='languagePage'
                        nameA='languagePageA allATags'
                        url='https://www.instagram.com/language/preferences/'
                        content='language'
                    ></SingleTopic>

                </li>
                <li className={props.liClass}>
                    <SingleTopic
                        nameP='metaVerifiedPage'
                        nameA='metaVerifiedPageA allATags'
                        url='https://www.instagram.com/accounts/meta_verified/?entrypoint=web_footer'
                        content='meta verified'
                    ></SingleTopic> 

                </li>
                {props.children}

            </ul>


        </section>

    )
}

export function Copyright(props) {
    return(
        <section className='copyrightSection'>
            <p className='copyright' >&copy; 2026 instagram from <span className='groupName'>ggw</span></p>

        </section>
        
    )


}

export function Footer() {
    return(
        <section className='footerInformations'>
          
            <Topics 
                sectionClass='topicSection'
                ulClass='topics'
                liClass='ulItems'

            />
            <Copyright />


        </section>
        

    )
}