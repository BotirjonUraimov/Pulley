import {Text, TouchableOpacity} from 'react-native';

type CustomButtonProps = {
  label?: string;
  disabled?: boolean;
  onClick?: () => void;
  type?: 'button' | 'submit';
  backgroundColor?: string;
  labelColor?: string;
  border?: string;
};

export default function CustomButton({
  label,
  disabled = false,
  onClick,
  type = 'button',
  backgroundColor = '#4582e9', // default value
  labelColor = 'white', // default value
  border,
}: CustomButtonProps): JSX.Element {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: backgroundColor,
        padding: 10,
        borderRadius: 12,
        height: 56,
        marginTop: 16,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 16,
        borderWidth: border ? 1 : 0, // Example usage of border
        borderColor: border || 'transparent',
      }}
      disabled={disabled}
      onPress={
        onClick
          ? onClick
          : () => {
              console.log(label);
            }
      }>
      <Text
        style={{
          color: labelColor,
          textAlign: 'center',
          fontSize: 16,
          fontWeight: '600',
        }}>
        {label}
      </Text>
    </TouchableOpacity>
  );
}
