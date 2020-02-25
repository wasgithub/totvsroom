import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, Text, Modal, ActivityIndicator } from 'react-native';

const transparent = 'transparent';
const ANIMATION = ['none', 'slide', 'fade'];
const SIZES = ['small', 'normal', 'large'];

const Spinner = props => {

  const [visible, setVisible] = useState(false)
  const [textContent, setTextContent] = useState("")
  
  useEffect(() => {
    console.log("passou aqui..")
    setVisible(props.visible)
  })


  const close = () => {
    setVisible(false)
    // this.setState({ visible: false });
  }

  // static getDerivedStateFromProps(props, state) {
  //   const newState = {};
  //   if (state.visible !== props.visible) newState.visible = props.visible;
  //   if (state.textContent !== props.textContent)
  //     newState.textContent = props.textContent;
  //   return newState;
  // }

  const _handleOnRequestClose = () => {
    if (props.cancelable) {
      close();
    }
  }

  const _renderDefaultContent = () => {
    return (
      <View style={styles.background}>
        {props.customIndicator ? (
          props.customIndicator
        ) : (
          <ActivityIndicator
            color={props.color}
            size={props.size}
            style={[styles.activityIndicator, { ...props.indicatorStyle }]}
          />
        )}
        <View style={[styles.textContainer, { ...props.indicatorStyle }]}>
          <Text style={[styles.textContent, props.textStyle]}>
            {textContent}
          </Text>
        </View>
      </View>
    );
  }

  const _renderSpinner = () => {
    if (!visible) return null;

    const spinner = () => {
      return(
        <View
          style={[styles.container, { backgroundColor: props.overlayColor }]}
          key={`spinner_${Date.now()}`}
        >
          {props.children
            ? props.children
            : _renderDefaultContent()}
        </View>
      )
    }

    return (
      <Modal
        animationType={props.animation}
        onRequestClose={_handleOnRequestClose}
        supportedOrientations={['landscape', 'portrait']}
        transparent
        visible={visible}
      >
        {spinner()}
      </Modal>
    );
  }

   return(
    _renderSpinner()
   )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: transparent,
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0
  },
  background: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textContainer: {
    flex: 1,
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute'
  },
  textContent: {
    top: 80,
    height: 50,
    fontSize: 20,
    fontWeight: 'bold'
  },
  activityIndicator: {
    flex: 1
  }
});


export default Spinner;

Spinner.propTypes = {
  cancelable: PropTypes.bool,
  color: PropTypes.string,
  animation: PropTypes.oneOf(ANIMATION),
  overlayColor: PropTypes.string,
  size: PropTypes.oneOf(SIZES),
  textContent: PropTypes.string,
  textStyle: PropTypes.object,
  visible: PropTypes.bool,
  indicatorStyle: PropTypes.object,
  customIndicator: PropTypes.element,
  children: PropTypes.element
};

Spinner.defaultProps = {
  visible: false,
  cancelable: false,
  textContent: '',
  animation: 'none',
  color: 'white',
  size: 'large', // 'normal',
  overlayColor: 'rgba(0, 0, 0, 0.25)'
};


