// NPM
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// COMPONENTS
import Input from './controls/Input';
import Label from './controls/Label';
import DateInput from './DateInput';
import PersonInput from './PersonInput';
import { DateIcon, PersonIcon, PinIcon } from '../icons';
import TimeSelect from './TimeSelect';
import FormError from './index'
// ACTIONS/CONFIG

// STYLES
const FormGroup = styled.div`
  position: relative;
  border: 1px solid ${props => (props.focused ? '#4fb798' : '#eef1f4')};
  border-radius: 4px;
  padding: 10px 15px;
  transition: border-color 0.1s ease-out;
`;

const InnerWrap = styled.div`
  display: flex;
  align-items: center;
`;

const InnerLeftIcon = styled.div`
  width: 22px;
  margin-right: 10px;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 22px;
    height: 22px;
    flex: 1;
    transition: fill 0.1s ease-out;
  }
`;

// MODULE
export default class FlatControl extends Component {
  constructor() {
    super();
    this.state = {
      focused: false
    };
    this.onFocus = this.onFocus.bind(this);
    this.onBlur = this.onBlur.bind(this);
    this.getFormIcon = this.getFormIcon.bind(this);
    this.focusElement = this.focusElement.bind(this);
  }

  focusElement() {
    this.onFocus();
    // console.log('focusing', this.input);
    if (this.input) {
      this.input.focus();
    }
  }

  onFocus() {
    this.setState({ focused: true });
  }

  onBlur() {
    this.setState({ focused: false });
  }

  getFormIcon(type, normal, active) {
    const { focused } = this.state;
    const fill = focused ? active : normal;
    switch (type) {
      case 'pin':
        return <PinIcon style={{ fill }} />;
      case 'person':
        return <PersonIcon style={{ fill }} />;
      case 'date':
        return <DateIcon style={{ fill }} />;
    }
  }

  render() {
    let input;

    switch (this.props.type) {
      case 'text': {
        input = (
          <Input
            {...this.props}
            innerRef={input => {
              this.input = input;
            }}
            onChange={this.props.onChange}
            onFocus={this.onFocus}
            onBlur={this.onBlur}
          />
        );
        break;
      }
      case 'date': {
        input = (
          <DateInput
            {...this.props}
            innerRef={input => {
              this.input = input;
            }}
            onChange={this.props.onChange}
            onFocus={this.onFocus}
            onBlur={this.onBlur}
          />
        );
        break;
      }
      case 'time': {
        input = (
          <TimeSelect
            {...this.props}
            innerRef={input => {
              console.log(input);
              this.input = input;
            }}
            onChange={this.props.onChange}
            focused={this.state.focused}
            onFocus={this.onFocus}
            onBlur={this.onBlur}
          />
        );
        break;
      }
      case 'person': {
        input = (
          <PersonInput
            {...this.props}
            innerRef={input => {
              this.input = input;
            }}
            onChange={this.props.onChange}
            focused={this.state.focused}
            onFocus={this.onFocus}
            onBlur={this.onBlur}
          />
        );
        break;
      }
      default:
        input = <span>You have not specified correct type</span>;
        break;
    }
    // console.log(this.props, this.input);
    return (
      <FormGroup focused={this.state.focused} onClick={this.focusElement}>
        {this.props.label && <Label id={this.props.id} label={this.props.label} />}
        <InnerWrap>
          {typeof this.props.leftIcon !== 'undefined' && (
            <InnerLeftIcon>
              {this.getFormIcon(this.props.leftIcon, '#d3d7dc', '#4fb798')}
            </InnerLeftIcon>
          )}
          {input}
          {this.props.error ||
            (this.state.error && <FormError>{this.props.error || this.state.error}</FormError>)}
        </InnerWrap>
      </FormGroup>
    );
  }
}

// Props Validation
FlatControl.propTypes = {};
