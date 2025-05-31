import { useState } from 'react';

function TogglePara() {
  const [visible, setVisible] = useState(false);

  return (
    <div style={{ padding: 20 }}>
      <button onClick={() => setVisible(prev => !prev)}>
        {visible ? 'Hide Paragraph' : 'Show Paragraph'}
      </button>

      {visible && <p>This is a toggle paragraph!</p>}
    </div>
  );
}

export default TogglePara;