/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

class Footer extends React.Component {
  docUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    const docsUrl = this.props.config.docsUrl;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
    const langPart = `${language ? `${language}/` : ''}`;
    return `${baseUrl}${docsPart}${langPart}${doc}`;
  }

  pageUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    return baseUrl + (language ? `${language}/` : '') + doc;
  }

  //<a href={this.docUrl('faq/encoding_and_streaming')}>FAQ</a>

  render() {
    return (
      <footer className="nav-footer" id="footer">
        <section className="sitemap">
          <div>
            <h5>Contact</h5>
            <a href="https://www.nanocosmos.de/">nanocosmos homepage</a>
            <a href="https://www.nanocosmos.de/contact">Contact</a>
            <a href="https://www.nanocosmos.de/support">Support</a>
            <a href="https://www.nanocosmos.de/terma">Legal Terms</a>
          </div>
          <div>
            <h5>Products</h5>
            <a href="https://www.nanocosmos.de/cloud">Nanostream Cloud with Bintu.Live</a>
            <a href="https://www.nanocosmos.de/h5live">H5Live Low Latency HTML5-Player</a>
            <a href="https://www.nanocosmos.de/webrtc">nanoStream Webcaster</a>
            <a href="https://www.nanocosmos.de/#nanostream">Nanostream Apps and SDK</a>
          </div>
          <div>
            <h5>More</h5>
            <a href="https://www.nanocosmos.de/blog/">Blog</a>
            <a href="https://twitter.com/nanovideo">Twitter</a>
            <a href="https://www.facebook.com/nanocosmos.net/">Facebook</a>
            <a href="https://www.linkedin.com/company/nanocosmos-gmbh">LinkedIn</a>
            <a href="https://github.com/nanocosmos/docs">GitHub</a>
            <a
              className="github-button"
              href={this.props.config.repoUrl}
              data-icon="octicon-star"
              data-count-href="/nanocosmos/docs/stargazers"
              data-show-count="true"
              data-count-aria-label="# stargazers on GitHub"
              aria-label="Star this project on GitHub">
              Star
            </a>
          </div>
        </section>

        <a
          href="https://nanocosmos.de/"
          target="_blank"
          rel="noreferrer noopener"
          className="fbOpenSource">
          <img
            src={`${this.props.config.baseUrl}img/footer_logo.png`}
            alt="nanocosmos GmbH"
            width="170"
            height="45"
          />
        </a>
        <section className="copyright">{this.props.config.copyright}</section>
      </footer>
    );
  }
}

module.exports = Footer;
