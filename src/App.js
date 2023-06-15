import FileUpload from './components/FileUpload';
import './css/app.css';
// 
function App() {
	return (
		<div className='container'>
			{/*  */}
			<div style={{ textAlign: "center" }}>
				<h1>Team Lead Assessment</h1>
			</div>
			{/*  */}
			<FileUpload />
			{/*  */}
		</div>
	);
}
// 
export default App;
