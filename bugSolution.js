```javascript
import { useRouter } from 'next/router';

function MyComponent() {
  const router = useRouter();
  const handleClick = () => {
    // Redirect to a new page using router.replace for better consistency
    router.replace('/new-page');
  };

  return (
    <button onClick={handleClick}>Go to New Page</button>
  );
}

export default MyComponent;
```