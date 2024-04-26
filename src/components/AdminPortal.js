import { makeObservable, observable, action, computed } from "mobx";
import { backendHost2 } from "../../stores/APIEndpoints";
import Papa from 'papaparse';
import { saveAs } from 'file-saver';
import { useState } from 'react';
import { observer } from 'mobx-react';

const INIT = "init";
const PENDING = "pending";
const DONE = "done";
const ERROR = "error";

const ExportStore = observer(({ apiProxy }) => {
  const [exportdata] = useState([]);
  const [exportLocation] = useState([]);
  const [csvData, setCsvData] = useState([]);
  const [urlData, setUrlData] = useState({
    tabs: "",
    errorName: "",
    errorType: ""
  });
  const [tabChng, setTabChng] = useState("");
  const [exportShow, setExportShow] = useState(false);
  const [showChange, setShowChange] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [state, setState] = useState(INIT);

  const fetchExport = async () => {
    let changes = undefined;
    if (urlData.tabs !== "dealer") {
      changes = `${urlData.tabs}?ErrorName=${urlData.errorName}&ErrorType=${urlData.errorType}`;
    } else {
      changes = "dealer";
    }
    try {
      const response = await apiProxy.getAsync(backendHost2 + changes);
      const result = await response.json();
      setCsvData(Papa.unparse(result.data));
      setState(DONE);
    } catch (e) {
      setState(ERROR);
    }
  };

  const downloadCsv = () => {
    const blob = new Blob([csvData], { type: 'text/csv;charset=utf-8;' });
    saveAs(blob, 'data.csv');
  };

  const changeFunctionUrl = (tab, name, type) => {
    setUrlData({ ...urlData, tabs: tab, errorName: name, errorType: type });
  };

  makeObservable({
    exportdata: observable,
    exportLocation: observable,
    showChange: observable,
    showDetails: observable,
    csvData: observable,
    urlData: observable,
    tabChng: observable,
    exportShow: observable,
    isDone: computed,
  }, {
    isDone: computed,
  });

  return null; // Replace this with your JSX for the component
});

export default ExportStore;