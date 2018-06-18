import React from 'react';
import PropTypes from 'prop-types';
import style from './About.css';

const About = props => <div className={style.About}>{props.title}</div>;

About.propTypes = {
  title: PropTypes.string,
};

export default About;
