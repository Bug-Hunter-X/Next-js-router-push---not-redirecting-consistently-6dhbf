```javascript
import { useRouter } from 'next/router';

function MyComponent() {
  const router = useRouter();
  const handleClick = () => {
    // Redirect to a new page
    router.push('/new-page');
  };

  return (
    <button onClick={handleClick}>Go to New Page</button>
  );
}

export default MyComponent;
```