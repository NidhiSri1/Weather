import { useEffect, useState } from "react";
import axios from "axios";
import {
    Button,
    TextInput,
    StyleSheet,
    View,
    TouchableOpacity,
    Text,
    Alert,
} from "react-native";
import stringLength from "string-length";
import { Link, useNavigate } from "react-router-native";

export const Inputs = ({ func }) => {
    const [country, setCountry] = useState();
    const [disable, setDisable] = useState(false);
    const navigate = useNavigate();
    // const handleApi = async () => {
    //     try {
    //         const response = await axios.get(
    //             `https://restcountries.com/v3.1/name/${country}`
    //         );

    //         setCountryList(response);
    //         console.log(props.func);
    //         props.func(countryList);

    //         navigate("/countrylist");
    //     } catch (error) {
    //         console.error(error);
    //     }
    // };

    const getName = () => {
        if (country === undefined || country === "") {
            setDisable(true);
            Alert.alert("Country name can't be empty");
        } else {
            console.log("hi");
            func(country);
            navigate("/countrylist");
        }
    };
    console.log(country);
    const handleDisable = (e) => {
        setCountry(e);
        setDisable(false);
    };
    // 6d443c7d0700a26796147476c7b96659
    return (
        <>
            <TextInput
                onChangeText={handleDisable}
                style={styles.inputContainer}
                placeholder={"Enter Your Country"}
            />

            <TouchableOpacity onPress={getName}>
                <View style={styles.wrapper}>
                    <Text style={styles.button}>Click me</Text>
                </View>
            </TouchableOpacity>
            {/* <Button title="Basic Button" disabled={true} onPress={() => {}} /> */}
        </>
    );
};

const styles = StyleSheet.create({
    inputContainer: {
        backgroundColor: "white",
        borderWidth: 1,
        borderRadius: 10,
        borderColor: "grey",
        padding: 10,
        fontSize: 20,
        marginTop: 40,
    },
    wrapper: {
        alignItems: "center",
        marginTop: 20,
        backgroundColor: "teal",
        padding: 10,
        borderRadius: 60,
    },
    button: {
        color: "white",
        fontWeight: "bold",
    },
});
