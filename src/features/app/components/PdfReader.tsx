import { Viewer } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";

function PdfReader() {
	const defaultLayoutPluginInstance = defaultLayoutPlugin();

	console.log(defaultLayoutPlugin);

	return (
		<div style={{ height: "750px" }}>
			<Viewer
				fileUrl="./hiram-gabriel-cv-1.pdf"
				plugins={[defaultLayoutPluginInstance]}
			/>
		</div>
	);
}

export default PdfReader;
