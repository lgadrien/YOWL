
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';

const CustomButton = ({ onPress, title, iconName }) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.buttonContainer}>
            <LinearGradient
                colors={['#1387d4', '#259399', '#0b466e']}
                style={styles.linearGradient}
                start={{ x: 0, y: 0 }} // Modification ici pour le début du dégradé
                end={{ x: 1, y: 0 }}   // Modification ici pour la fin du dégradé
            >
                <Text style={styles.buttonText}>{title}</Text>
                <Icon name={iconName} size={16} color="#ffffff" style={styles.icon} />
            </LinearGradient>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    buttonContainer: {
        marginVertical: 10,
        alignItems: 'center',
    },
    linearGradient: {
        width: '100%',
        height: 50,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        color: '#ffffff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    icon: {
        position: 'absolute',
        right: 10,
    },
});

export default CustomButton;
