import Spinner from './Spinner'
import useCacheAssets from '../hooks/useCacheAssets'
import { View } from 'react-native'

interface Props {
  children: React.ReactNode
}

export default function ScreenLayout({ children }: Props) {
  const areAssetsCached = useCacheAssets()

  return <View style={{flex:1}}>{areAssetsCached ? children : <Spinner />}</View>
}
