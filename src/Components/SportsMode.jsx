import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import React from "react";
import LottieView from "lottie-react-native";
import axios from "axios";

const baseUrl = "http://192.168.4.1";

const SportsMode = () => {
	return (
		<View style={{ flex: 1 }}>
			<View style={{ flex: 1 }}>
				<LottieView
					source={require("../../assets/driving-car.json")}
					style={{
						height: 150,
						width: 150,
						alignSelf: "center",
						marginTop: 10,
					}}
					autoPlay
				/>
			</View>

			<View style={styles.controllerWrapper}>
				<View style={styles.upControl}>
					<Control endpoint="LED" />
				</View>
				<View style={styles.leftRight}>
					<Control
						style={{
							transform: [{ rotate: "-90deg" }],
						}}
						endpoint="LED_2"
					/>
					<Control
						style={{
							transform: [{ rotate: "90deg" }],
						}}
						endpoint="LED_1"
					/>
				</View>
			</View>
		</View>
	);
};

const Control = ({ style, endpoint }) => {
	const onHold = () => {
		const url = `${baseUrl}/${endpoint}/on`;
		axios.get(url);
	};

	const onHoldLeave = () => {
		const url = `${baseUrl}/${endpoint}/off`;
		axios.get(url);
	};

	return (
		<TouchableOpacity
			activeOpacity={0.3}
			style={{ ...styles.control, ...style }}
			onPressIn={onHold}
			onPressOut={onHoldLeave}
		>
			<Image style={styles.arrow} source={require("../../assets/up.png")} />
		</TouchableOpacity>
	);
};

export default SportsMode;

const styles = StyleSheet.create({
	controllerWrapper: {
		// backgroundColor: "gray",
		flex: 1,
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
	},
	leftRight: {
		flex: 1,
		flexDirection: "row",
		justifyContent: "flex-end",
		alignItems: "center",
	},
	upControl: {
		flex: 1,
		// backgroundColor: "red",
		paddingLeft: 40,
		alignItems: "flex-start",
	},
	control: {
		padding: 20,
		backgroundColor: "white",
		margin: 10,
		borderRadius: 50,
	},
	arrow: {
		width: 50,
		height: 50,
	},
});
