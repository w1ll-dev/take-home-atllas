import { MediaDimensions } from "@assets/images/imageDimensions";
import { ImageName, Images } from "@assets/images/imageName";
import {
  ImageProps as RNImageProps,
  TouchableOpacityProps,
  Image as RNImage,
  TouchableOpacity,
} from "react-native";

type ImageProps = Omit<RNImageProps, "source"> &
  Partial<MediaDimensions> & {
    image: ImageName;
    touchProps?: TouchableOpacityProps;
  };

const Image = ({ image, touchProps }: ImageProps) => {
  if (touchProps) {
    return (
      <TouchableOpacity {...touchProps}>
        <RNImage source={Images[image]} />
      </TouchableOpacity>
    );
  }

  return <RNImage source={Images[image]} />;
};

export { Image };
