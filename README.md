# Segformer Project

## Hugging Face Links
- Model: [Segformer Fine tuned Model](https://huggingface.co/AliShah07/segformer-b0-finetuned-segments-stamp-verification2)
- Dataset: [StaVer Annotated Dataset](https://huggingface.co/datasets/AliShah07/stamp-verification)

## Segformer Image
![Segformer Image](https://huggingface.co/datasets/huggingface/documentation-images/resolve/main/segformer_architecture.png)

## Data_Model_Train.ipynb
The `Data_Model_Train.ipynb` file is used for fine-tuning the Segformer model. Before running the notebook, ensure that you have your Hugging Face token and Segments.ai token ready. You'll need to modify the code according to your Hugging Face ID name and the name you want to assign to your fine-tuned model.

## server.ipynb
The `server.ipynb` notebook should be run alongside your React app. Before running the notebook, make sure to update it with your own Ngrok token. After running Ngrok, use the generated URL in your API calls from the frontend to communicate with the server.

## Running the React App
To run the React app:
1. Navigate to the project directory in your terminal.
2. Install dependencies by running `npm install`.
3. Start the development server with `npm start`.
4. Open your web browser and go to `http://localhost:3000` to view the React app.

## Evaluation Metrics
- Loss: 0.0365
- Mean Iou: 0.1372
- Mean Accuracy: 0.2744
- Overall Accuracy: 0.2744
- Accuracy Unlabeled: nan
- Accuracy Stamp: 0.2744
- Iou Unlabeled: 0.0
- Iou Stamp: 0.2744
