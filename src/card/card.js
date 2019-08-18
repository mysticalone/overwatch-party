/*
 * Card
 *
 * Base card framework. Please extend into a component
 *
 */

import React from "react";
import PropTypes from 'prop-types';
import { Link, graphql } from "gatsby"

function Card(props: cardProps ) {

}


Card.PropTypes = {
    optionalHeader: PropTypes.node,
    optionalContent: PropTypes.node,

};