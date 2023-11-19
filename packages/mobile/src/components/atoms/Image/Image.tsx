import { MediaDimensions } from "@assets/images/imageDimensions";
import { ImageName, Images } from "@assets/images/imageName";
import {
  Image as RNImage,
  ImageProps as RNImageProps,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";

type ImageProps = Omit<RNImageProps, "source"> &
  Partial<MediaDimensions> & {
    image: ImageName;
    touchProps?: TouchableOpacityProps;
  };

const Image = ({ image, touchProps, ...props }: ImageProps) => {
  if (touchProps) {
    return (
      <TouchableOpacity {...touchProps}>
        <RNImage source={Images[image]} {...props} />
      </TouchableOpacity>
    );
  }
  return <RNImage source={Images[image]} {...props} />;
};

export { Image };
