import pickle
from sklearn.externals import joblib

NB_classifier_model = joblib.load('prediction/NB_classifier_model.pkl')
MNB_classifier_model = joblib.load('prediction/MNB_classifier_model.pkl')
LogisticRegression_classifier_model = joblib.load('prediction/LogisticRegression_classifier_model.pkl')
top_words_saving  = joblib.load('prediction/top_words_saving.pkl')

nbcm = pickle.loads(NB_classifier_model)
mnbcm = pickle.loads(MNB_classifier_model)
lcm = pickle.loads(LogisticRegression_classifier_model)
top_words = pickle.loads(top_words_saving)

def find_features(top_words, text):
    feature = {}
    for word in top_words:
        feature[word] = word in text.lower()
    return feature

def get_prediction(test, description):

    features = find_features(top_words, test+" "+description)
    NB_classifier_prediction = nbcm.classify(features)
    MNB_classifier_prediction = mnbcm.classify(features)
    LogisticRegression_classifier_prediction = lcm.classify(features)

    return NB_classifier_prediction, MNB_classifier_prediction, LogisticRegression_classifier_prediction