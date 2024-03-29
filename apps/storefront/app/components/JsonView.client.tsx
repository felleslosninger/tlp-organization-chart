import ReactJson from 'react-json-view'

export default function JsonView({ src }: { src: object }) {
  return (
    <ReactJson 
      src={src} 
      theme='tube' 
      displayDataTypes={false} 
      displayObjectSize={false} 
      enableClipboard={false}
      collapsed={1}
      style={{
        padding: 'var(--fds-spacing-4)',
        borderRadius: 'var(--fds-border_radius-medium)',
        maxWidth: '800px',
        margin: 'var(--fds-spacing-5) 0',
        backgroundColor: 'rgb(1, 22, 39)',
      }}
    />
  )
}
