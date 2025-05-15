const ImageWithCaption = ({ url, alt }) => {
  return (
    <div style={{ textAlign: 'center', margin: '20px' }}>
      <img src={url} alt={alt} style={{ maxWidth: '100%', height: 'auto' }} />
      <p>{alt}</p> 
    </div>
  );
};


const ImageProps = () => {
  return (
    <div>
      <ImageWithCaption 
        url="/src/assets/images/avatar.jpeg" 
        alt="User Avatar" 
      />
    </div>
  );
};

export default ImageProps;