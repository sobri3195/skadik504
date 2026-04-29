export default function Badge({status}){return <span className={`badge badge-${status?.toLowerCase().replace(/\s+/g,'-')}`}>{status}</span>}
