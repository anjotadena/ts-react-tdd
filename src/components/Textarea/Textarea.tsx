import { ChangeEvent } from 'react';

type TextareaProps = {
  value: string;
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
};

const Textarea: React.FC<TextareaProps> = (props) => {
  return (
    <textarea
      rows={2}
      value={props.value}
      data-testid="textarea"
      onChange={props.onChange}
    ></textarea>
  );
};

export default Textarea;
