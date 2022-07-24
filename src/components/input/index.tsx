import { CloseIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  Input as ChakraInput,
  useMultiStyleConfig,
} from '@chakra-ui/react';
import { AnyFunction, ChangeEvent } from '../../types';

type Props = {
  type?: string;
  placeholder?: string;
  value: any;
  onChange: AnyFunction;
};

const Input = (props: Props) => {
  const { type = 'text', placeholder = 'enter', value, onChange } = props;
  const onHandleChange = (event: ChangeEvent) => onChange(event.target.value);
  const onHandleClear = () => onChange('');

  const styles = useMultiStyleConfig('input', props);

  return (
    <Box sx={styles.wrapper}>
      <ChakraInput
        sx={styles.input}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onHandleChange}
      />
      <Button sx={styles.clear} size="sm" onClick={onHandleClear}>
        <CloseIcon color="green.base" />
      </Button>
    </Box>
  );
};

export default Input;