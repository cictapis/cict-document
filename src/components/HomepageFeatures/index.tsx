import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Easy to Use',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        The CICT system was designed with ease-of-use in mind. Whether you're a seasoned developer or just starting out, our system is simple to understand and use. We've made it easy to navigate, with clear instructions and helpful documentation to guide you every step of the way.
      </>
    ),
  },
  {
    title: 'Secure and Reliable',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Security and reliability are top priorities for us. We've implemented robust measures to ensure that your data is safe and secure at all times. Our system is constantly monitored and updated to stay ahead of potential threats, and we provide 24/7 support to address any issues that may arise.
      </>
    ),
  },
  {
    title: 'Flexible and Scalable',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        We understand that every business has unique needs and requirements. That's why we've made our system flexible and scalable, so you can tailor it to your specific needs. Whether you're a small startup or a large enterprise, our system can grow and evolve with your business.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
