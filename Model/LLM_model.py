from transformers import pipeline 
 
classifier = pipeline("sentiment-analysis") 
res = classifier("I've been waiting for a HugginFace")   
print(res)  