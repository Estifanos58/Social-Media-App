import { TouchableOpacity, Text } from 'react-native';

const CustomTabButton = ({ onPress, name, size, id, selected}:{onPress: any; name: string; size: number; id:number; selected: nu}) =>  {
  return (
    <TouchableOpacity onPress={onPress} >
        {children}
      <Text style={id === selected && {color: 'yellow'}} >{name}</Text>
    </TouchableOpacity>
  );
}

export default CustomTabButton;