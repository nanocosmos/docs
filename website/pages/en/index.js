/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const MarkdownBlock = CompLibrary.MarkdownBlock; /* Used to read markdown */
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

class HomeSplash extends React.Component {
  render() {
    const {siteConfig, language = ''} = this.props;
    const {baseUrl, docsUrl} = siteConfig;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
    const langPart = `${language ? `${language}/` : ''}`;
    const docUrl = doc => `${baseUrl}${docsPart}${langPart}${doc}`;

    const SplashContainer = props => (
      <div className="homeContainer">
        <div className="homeSplash">
          <div className="wrapper homeWrapper">{props.children}</div>
        </div>
      </div>
    );

    const Logo = props => (
      <div className="projectLogo">
        <img src={'https://lh3.googleusercontent.com/W080Jr5ludNzbw833Aqq7TqI1eB7j2Llo-KvVjIuTCxrXGYwnsxImvhnPe4CV7HAAVHqPHB5NbprZZc6NNbD=w1024'} alt="Project Logo" />
      </div>
    );

    const ProjectTitle = () => (
      <h2 className="projectTitle">
        {siteConfig.title}
        <small>{siteConfig.tagline}</small>
      </h2>
    );

    const Button = props => (
      <div className="pluginWrapper buttonWrapper">
        <a className={props.className} href={props.href} target={props.target}>
          {props.children}
        </a>
      </div>
    );

    return (
      <SplashContainer>
        <div className="inner">
	        <Logo />
          <div className="contentWrapper">
          <ProjectTitle siteConfig={siteConfig} />
          <div className="buttonWrapper">
            <Button className="button_filled button button_cta" href="/docs/cloud/cloud_introduction">Get started</Button>
            <Button className="button button_outline button_cta" href="/docs/faq/faq_streaming">Browse FAQs</Button>
          </div>
          </div>
        </div>
      </SplashContainer>
    );
  }
}

class Index extends React.Component {
  render() {
    const {config: siteConfig, language = ''} = this.props;
    const {baseUrl} = siteConfig;

    const Block = props => (
      <Container
        padding={['']}
        id={props.id}
        background={props.background}>
        <GridBlock
          align="left"
          contents={props.children}
          layout={props.layout}
        />
      </Container>
    );

    const Button = props => (
      <div className="pluginWrapper">
        <a className={props.className} href={props.href} target={props.target}>
          {props.children}
        </a>
      </div>
    );

    const Showcase = () => {

      return (
        <div className="showcaseSection">
          <h2 className="sectionHeader">Power your live streaming</h2>
          <div className="showcaseCta">
            <div>
              <p><span>nanoStream WebRTC.live:</span> browser-based live encoder</p>
              <Button className="button button_outline_inverted button_cta" href="/docs/webrtc/nanostream_webrtc_introduction">More about nanoStream WebRTC.live</Button>
            </div>
            <div>
              <p><span>nanoStream Apps and SDKs:</span> Windows, macos, iOS</p>
              <Button className="button button_outline_inverted button_cta" href="/docs/nanostream/nanostream">More about nanoStream Apps and SDKs</Button>
            </div>
          </div>
          <div>
            <img className="showcaseBanner" src={'https://lh3.googleusercontent.com/C-X2Z6XXKPCgovrjTz-QFedGIw7uweYY6abunsh2MgQZYqkbDvvtYY_SjYMtWKCThxRs80JzD4zkZl8G0to6=w1024'} alt="Project Logo" />
          </div>
        </div>
      );
    };


    const Features = () => (
      <div className="featureSection"> 
        <div>
          <h2 className="sectionHeader">Join a new live streaming era</h2>
        </div>
        <Block layout="twoColumn">
          {[
            {
              content: 'Create awesome interactive live streams with real-time feedback from your audience. nanoStream Cloud has ultra-low latency and doesn\'t take more than 1 second to get you live around the world.',
              title: 'Interactive',
            },
            {
              content: 'Reach your viewers all over the world through a trustful live streaming Cloud. Don\'t worry about contantly changing viewership, nanoStream Cloud will rock your live streams.',
              title: 'Scalable',
            },
          ]}
        </Block>
        <Block layout="twoColumn">
          {[
            {
              content: 'Provide content to your audience on any device. It doesn\'t matter when your viewers are, nanoStream Cloud works on all HTML5 browsers, including Safari on iOS.',
              title: 'Cross-platform',
            },
            {
              content: 'Enjoy the ease of use of an end-to-end solution and let us take care of the technical part of your live streams. Or integrate nanoStream Cloud to your existing workflow as an ultra-low latency CDN.',
              title: 'Flexible ',
            },
          ]}
        </Block>
      </div>
    );

    const Help = () => (
      <div className="helpSection"> 
        <div>
          <h2 className="sectionHeader">Any questions?</h2>
        </div>
        <div className="helpCta">
          <Button className="button_filled button button_cta" href="/docs/faq/faq_streaming">Browse FAQs</Button>
          <Button className="button button_outline button_cta" href="mailto:support@nanocosmos.de">Contact Support</Button>
        </div>
      </div>
    );

    return (
        <div>
          <HomeSplash siteConfig={siteConfig} language={language} />
          <div className="mainContainer">
            <Showcase />
            <Features />
            <Help />
          </div>
        </div>
    );
  }
}

module.exports = Index;
