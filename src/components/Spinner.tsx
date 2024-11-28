import { ActivityIndicator, StyleSheet, View } from 'react-native'

export default function Spinner() {
    return (
        <View style={styles.loadingPostion}>
            <ActivityIndicator size="large" color="#FFF" />
        </View>
    )
}
const styles = StyleSheet.create({
    loadingPostion: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "rgba(0,0,0,0.3)",
      },
})
