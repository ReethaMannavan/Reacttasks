function KeyPressInput() {
  const handleKeyPress = () => {
    console.log('Key Pressed');
  };

  return (
    <input
      type="text"
      onKeyPress={handleKeyPress}
      placeholder="Press any key"
    />
  );
}

export default KeyPressInput;