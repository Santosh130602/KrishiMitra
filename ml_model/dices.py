# # https://www.kaggle.com/code/ahmdayman/plant-village-detection-99-54-accuracy?scriptVersionId=222904651&cellId=4


# # import os
# # import pandas as pd
# # import numpy as np
# # import matplotlib.pyplot as plt
# # import seaborn as sns
# # from sklearn.model_selection import train_test_split
# # from sklearn.metrics import confusion_matrix
# # import tensorflow as tf
# # from tensorflow import keras
# # from tensorflow.keras.layers import Dense, Conv2D, MaxPooling2D, Flatten, Dropout
# # from tensorflow.keras.models import Sequential
# # from tensorflow.keras.optimizers import Adamax
# # from tensorflow.keras.callbacks import EarlyStopping
# # from tensorflow.keras.layers import BatchNormalization
# # from tqdm import tqdm
# # from tensorflow.keras.preprocessing.image import ImageDataGenerator
# # from PIL import Image
# # import warnings
# # warnings.filterwarnings('ignore')

# # train_dir = '/kaggle/input/new-plant-diseases-dataset/New Plant Diseases Dataset(Augmented)/New Plant Diseases Dataset(Augmented)/train'
# # valid_dir = '/kaggle/input/new-plant-diseases-dataset/New Plant Diseases Dataset(Augmented)/New Plant Diseases Dataset(Augmented)/valid'
# # test_dir = '/kaggle/input/new-plant-diseases-dataset/test/test'


# # filenames_train = []
# # label_train = []
# # folds = os.listdir(train_dir)
# # for fold in folds: 
# #     FoldPath = os.path.join(train_dir, fold)
# #     files = os.listdir(FoldPath)
# #     for file in tqdm(files):
# #         filepath = os.path.join(FoldPath,file)
# #         filenames_train.append(filepath)
# #         label_train.append(fold)



# # filenames_valid = []
# # label_valid = []
# # folds = os.listdir(valid_dir)
# # for fold in folds:
# #     FoldPath = os.path.join(valid_dir, fold)
# #     files = os.listdir(FoldPath)
# #     for file in tqdm(files):
# #         filepath = os.path.join(FoldPath,file)
# #         filenames_valid.append(filepath)
# #         label_valid.append(fold)








# # df_train = pd.DataFrame({
# #     'filename': filenames_train,
# #     'label': label_train
# # })
# # df_valid = pd.DataFrame({
# #     'filename': filenames_valid,
# #     'label': label_valid
# # })


# # print(df_train.shape)
# # print(df_valid.shape)


# # df_train.head(5)

# # df_train.sample(5)

# # color = ['#CAE0BC','#780C28','#EAFAEA','#6E8E59']


# # plt.figure(figsize=(30,9))
# # plt.bar(df_train['label'].unique(), df_train['label'].value_counts(), color=color)
# # plt.title('Train Data Distribution')
# # plt.xticks(rotation=45)
# # plt.show()


# # print(np.unique(label_train))


# # data_gen  = ImageDataGenerator(
# #     rescale=1./255,
# #     rotation_range=20,
# #     shear_range=0.2,
# #     zoom_range=0.2,
# #     horizontal_flip=True)

# # # only normalization
# # test_gen = ImageDataGenerator(rescale=1./255)


# # imge_size = (224,224)
# # batch_size = 32


# # train_gen = data_gen.flow_from_dataframe(
# #     df_train,
# #     x_col='filename',
# #     shuffle=True,
# #     y_col='label',
# #     target_size=(imge_size[0],imge_size[1]),
# #     class_mode='categorical',
# #     batch_size=batch_size)

# # valid_gen = data_gen.flow_from_dataframe(
# #     df_valid,
# #     shuffle=True,
# #     x_col='filename',
# #     y_col='label',
# #     target_size=(imge_size[0],imge_size[1]),
# #     class_mode='categorical')



# # class_dict = train_gen.class_indices
# # print(class_dict)


# Model = Sequential([
#     Conv2D(64, kernel_size= (3,3),padding='same', activation='relu', input_shape=(imge_size[0],imge_size[1],3)),
#     Conv2D(64, kernel_size= (3,3),padding='same', activation='relu'),
#     BatchNormalization(),
#     MaxPooling2D((2,2)),

#     Conv2D(128, kernel_size= (3,3),padding='same', activation='relu'),
#     Conv2D(128, kernel_size= (3,3),padding='same', activation='relu'),
#     BatchNormalization(),
#     MaxPooling2D((2,2)),

    
#     Conv2D(128, kernel_size= (3,3),padding='same', activation='relu'),
#     Conv2D(128, kernel_size= (3,3),padding='same', activation='relu'),
#     BatchNormalization(),
#     MaxPooling2D((2,2)),

#     Conv2D(256, kernel_size= (3,3),padding='same', activation='relu'),
#     Conv2D(256, kernel_size= (3,3),padding='same', activation='relu'),
#     BatchNormalization(),
#     MaxPooling2D((2,2)),


#     Conv2D(512, kernel_size= (3,3),padding='same', activation='relu'),
#     Conv2D(512, kernel_size= (3,3),padding='same', activation='relu'),
#     BatchNormalization(),
#     MaxPooling2D((2,2)),

#     Conv2D(512, kernel_size= (3,3),padding='same', activation='relu'),
#     Conv2D(512, kernel_size= (3,3),padding='same', activation='relu'),
#     BatchNormalization(),
#     MaxPooling2D((2,2)),

#     Flatten(),
#     Dense(256, activation='relu'),
#     Dense(64, activation='relu'),
#     Dropout(0.3),
#     Dense(38, activation='softmax') ])


#     Model.summary()


#     Model.compile(Adamax(learning_rate=0.001), loss='categorical_crossentropy', metrics=['accuracy'])


#     history = Model.fit(
#     train_gen,
#     epochs=40,
#     validation_data=valid_gen,
#     callbacks=[EarlyStopping(monitor='val_loss', patience=3, restore_best_weights=True)],
#     verbose=1
    
#     )


#     test_ds = tf.keras.preprocessing.image_dataset_from_directory(
#     test_dir,
#     image_size=(imge_size[0], imge_size[1]),
#     shuffle=False,
#     labels=None  
# )


# print(Model.evaluate(train_gen))
# print(Model.evaluate(valid_gen))

# Model.save('Modelplanit_ACC97.23.h5')

# preds = Model.predict(valid_gen)
# y_pred = np.argmax(preds, axis=1)


# cm = confusion_matrix(valid_gen.classes, y_pred)
# labels = list(class_dict.keys())
# plt.figure(figsize=(19,12))
# sns.heatmap(cm, annot=True, fmt='d', cmap=color, xticklabels=labels, yticklabels=labels)
# plt.xlabel('Predicted Label')
# plt.ylabel('Truth Label')
# plt.show()


# plt.plot(history.history['accuracy'])
# plt.plot(history.history['val_accuracy'])
# plt.title('model accuracy')
# plt.ylabel('accuracy')
# plt.xlabel('epoch')
# plt.legend(['train', 'val'], loc='upper left')


# plt.plot(history.history['loss'])
# plt.plot(history.history['val_loss'])
# plt.title('model loss')
# plt.ylabel('loss')
# plt.xlabel('epoch')
# plt.legend(['train', 'val'], loc='upper left')


# def predict(img_path):

    
#     label = list(class_dict.keys())
#     plt.figure(figsize=(12, 19))
#     img = Image.open(img_path)
#     resized_img = img.resize((224, 224))
#     img = np.asarray(resized_img)
#     img = np.expand_dims(img, axis=0)
#     img = img / 255
#     predictions = Model.predict(img)
#     probs = list(predictions[0])
#     labels = label
#     plt.subplot(2, 1, 1)
#     plt.imshow(resized_img)
#     plt.subplot(2, 1, 2)
#     bars = plt.barh(labels, probs)
#     plt.xlabel('Probability', fontsize=15)
#     ax = plt.gca()
#     ax.bar_label(bars, fmt = '%.2f')
#     plt.show()




# predict('/kaggle/input/new-plant-diseases-dataset/test/test/AppleCedarRust2.JPG')

# predict('/kaggle/input/new-plant-diseases-dataset/test/test/AppleScab1.JPG')

# predict('/kaggle/input/new-plant-diseases-dataset/test/test/TomatoYellowCurlVirus2.JPG')


# base_model = tf.keras.applications.EfficientNetB3(
#     include_top=False,
#     weights="imagenet",
#     input_shape=(imge_size[0],imge_size[1],3),
#     pooling='max',
# )


# ModelPretrained = Sequential([
#     base_model,
    
#     Dense(256 , activation='relu'),
#     Dropout(0.3),
#     Dense(38, activation='softmax')
    
# ])
# ModelPretrained.compile(optimizer=Adamax(learning_rate=0.001), loss='categorical_crossentropy', metrics=['accuracy'])

# history_Final = ModelPretrained.fit(
#     train_gen, 
#     epochs=5, 
#     validation_data=valid_gen, 
#     verbose=1, 
    
# )

# print(ModelPretrained.evaluate(train_gen))
# print(ModelPretrained.evaluate(valid_gen))


# ModelPretrained.save('Plant_Village_Detection_Model_ACC99.53%.h5')


# preds = ModelPretrained.predict(valid_gen)
# y_pred_ModelPretrained = np.argmax(preds, axis=1)


# cm = confusion_matrix(valid_gen.classes, y_pred_ModelPretrained)
# labels = list(class_dict.keys())
# plt.figure(figsize=(19,12))
# sns.heatmap(cm, annot=True, fmt='d', cmap=color, xticklabels=labels, yticklabels=labels)
# plt.xlabel('Predicted Label')
# plt.ylabel('Truth Label')
# plt.show()














































import os
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns
from sklearn.model_selection import train_test_split
from sklearn.metrics import confusion_matrix
import tensorflow as tf
from tensorflow import keras
from tensorflow.keras.layers import Dense, Conv2D, MaxPooling2D, Flatten, Dropout
from tensorflow.keras.models import Sequential
from tensorflow.keras.optimizers import Adamax
from tensorflow.keras.callbacks import EarlyStopping
from tensorflow.keras.layers import BatchNormalization
from tqdm import tqdm
from tensorflow.keras.preprocessing.image import ImageDataGenerator
from PIL import Image
import warnings


import kagglehub

# Download latest version
path = kagglehub.dataset_download("vipoooool/new-plant-diseases-dataset")

warnings.filterwarnings('ignore')

train_dir = '/kaggle/input/new-plant-diseases-dataset/New Plant Diseases Dataset(Augmented)/New Plant Diseases Dataset(Augmented)/train'
valid_dir = '/kaggle/input/new-plant-diseases-dataset/New Plant Diseases Dataset(Augmented)/New Plant Diseases Dataset(Augmented)/valid'
test_dir = '/kaggle/input/new-plant-diseases-dataset/test/test'


filenames_train = []
label_train = []
folds = os.listdir(train_dir)
for fold in folds: 
    FoldPath = os.path.join(train_dir, fold)
    files = os.listdir(FoldPath)
    for file in tqdm(files):
        filepath = os.path.join(FoldPath,file)
        filenames_train.append(filepath)
        label_train.append(fold)



filenames_valid = []
label_valid = []
folds = os.listdir(valid_dir)
for fold in folds:
    FoldPath = os.path.join(valid_dir, fold)
    files = os.listdir(FoldPath)
    for file in tqdm(files):
        filepath = os.path.join(FoldPath,file)
        filenames_valid.append(filepath)
        label_valid.append(fold)





df_train = pd.DataFrame({
    'filename': filenames_train,
    'label': label_train
})
df_valid = pd.DataFrame({
    'filename': filenames_valid,
    'label': label_valid
})

print(df_train.shape)
print(df_valid.shape)
(70295, 2)
(17572, 2)
df_train.head(5)


df_train.sample(5)



color = ['#CAE0BC','#780C28','#EAFAEA','#6E8E59']
plt.figure(figsize=(30,9))
plt.bar(df_train['label'].unique(), df_train['label'].value_counts(), color=color)
plt.title('Train Data Distribution')
plt.xticks(rotation=45)
plt.show()

print(np.unique(label_train))


data_gen  = ImageDataGenerator(
    rescale=1./255,
    rotation_range=20,
    shear_range=0.2,
    zoom_range=0.2,
    horizontal_flip=True)

# only normalization
test_gen = ImageDataGenerator(rescale=1./255)


imge_size = (224,224)
batch_size = 32

train_gen = data_gen.flow_from_dataframe(
    df_train,
    x_col='filename',
    shuffle=True,
    y_col='label',
    target_size=(imge_size[0],imge_size[1]),
    class_mode='categorical',
    batch_size=batch_size)


valid_gen = data_gen.flow_from_dataframe(
    df_valid,
    shuffle=True,
    x_col='filename',
    y_col='label',
    target_size=(imge_size[0],imge_size[1]),
    class_mode='categorical')




class_dict = train_gen.class_indices
print(class_dict)


Model = Sequential([
    Conv2D(64, kernel_size= (3,3),padding='same', activation='relu', input_shape=(imge_size[0],imge_size[1],3)),
    Conv2D(64, kernel_size= (3,3),padding='same', activation='relu'),
    BatchNormalization(),
    MaxPooling2D((2,2)),

    Conv2D(128, kernel_size= (3,3),padding='same', activation='relu'),
    Conv2D(128, kernel_size= (3,3),padding='same', activation='relu'),
    BatchNormalization(),
    MaxPooling2D((2,2)),

    
    Conv2D(128, kernel_size= (3,3),padding='same', activation='relu'),
    Conv2D(128, kernel_size= (3,3),padding='same', activation='relu'),
    BatchNormalization(),
    MaxPooling2D((2,2)),

    Conv2D(256, kernel_size= (3,3),padding='same', activation='relu'),
    Conv2D(256, kernel_size= (3,3),padding='same', activation='relu'),
    BatchNormalization(),
    MaxPooling2D((2,2)),

    Conv2D(512, kernel_size= (3,3),padding='same', activation='relu'),
    Conv2D(512, kernel_size= (3,3),padding='same', activation='relu'),
    BatchNormalization(),
    MaxPooling2D((2,2)),

    Conv2D(512, kernel_size= (3,3),padding='same', activation='relu'),
    Conv2D(512, kernel_size= (3,3),padding='same', activation='relu'),
    BatchNormalization(),
    MaxPooling2D((2,2)),

    Flatten(),
    Dense(256, activation='relu'),
    Dense(64, activation='relu'),
    Dropout(0.3),
    Dense(38, activation='softmax') ])

Model.summary()


Model.compile(Adamax(learning_rate=0.001), loss='categorical_crossentropy', metrics=['accuracy'])


history = Model.fit(
    train_gen,
    epochs=40,
    validation_data=valid_gen,
    callbacks=[EarlyStopping(monitor='val_loss', patience=3, restore_best_weights=True)],
    verbose=1
    
    )


    


test_ds = tf.keras.preprocessing.image_dataset_from_directory(
    test_dir,
    image_size=(imge_size[0], imge_size[1]),
    shuffle=False,
    labels=None  
)


print(Model.evaluate(train_gen))
print(Model.evaluate(valid_gen))



Model.save('Modelplanit_ACC97.23.h5')

preds = Model.predict(valid_gen)

y_pred = np.argmax(preds, axis=1)


cm = confusion_matrix(valid_gen.classes, y_pred)
labels = list(class_dict.keys())
plt.figure(figsize=(19,12))
sns.heatmap(cm, annot=True, fmt='d', cmap=color, xticklabels=labels, yticklabels=labels)
plt.xlabel('Predicted Label')
plt.ylabel('Truth Label')
plt.show()


plt.plot(history.history['accuracy'])
plt.plot(history.history['val_accuracy'])
plt.title('model accuracy')
plt.ylabel('accuracy')
plt.xlabel('epoch')
plt.legend(['train', 'val'], loc='upper left')


plt.plot(history.history['loss'])
plt.plot(history.history['val_loss'])
plt.title('model loss')
plt.ylabel('loss')
plt.xlabel('epoch')
plt.legend(['train', 'val'], loc='upper left')

def predict(img_path):
    label = list(class_dict.keys())
    plt.figure(figsize=(12, 19))
    img = Image.open(img_path)
    resized_img = img.resize((224, 224))
    img = np.asarray(resized_img)
    img = np.expand_dims(img, axis=0)
    img = img / 255
    predictions = Model.predict(img)
    probs = list(predictions[0])
    labels = label
    plt.subplot(2, 1, 1)
    plt.imshow(resized_img)
    plt.subplot(2, 1, 2)
    bars = plt.barh(labels, probs)
    plt.xlabel('Probability', fontsize=15)
    ax = plt.gca()
    ax.bar_label(bars, fmt = '%.2f')
    plt.show()

predict('/kaggle/input/new-plant-diseases-dataset/test/test/AppleCedarRust2.JPG')


predict('/kaggle/input/new-plant-diseases-dataset/test/test/AppleScab1.JPG')


predict('/kaggle/input/new-plant-diseases-dataset/test/test/TomatoYellowCurlVirus2.JPG')


base_model = tf.keras.applications.EfficientNetB3(
    include_top=False,
    weights="imagenet",
    input_shape=(imge_size[0],imge_size[1],3),
    pooling='max',
)


ModelPretrained = Sequential([
    base_model,
    
    Dense(256 , activation='relu'),
    Dropout(0.3),
    Dense(38, activation='softmax')
    
])

ModelPretrained.compile(optimizer=Adamax(learning_rate=0.001), loss='categorical_crossentropy', metrics=['accuracy'])
history_Final = ModelPretrained.fit(
    train_gen, 
    epochs=5, 
    validation_data=valid_gen, 
    verbose=1, 
    
)

print(ModelPretrained.evaluate(train_gen))
print(ModelPretrained.evaluate(valid_gen))


ModelPretrained.save('Plant_Village_Detection_Model_ACC99.53%.h5')

preds = ModelPretrained.predict(valid_gen)
y_pred_ModelPretrained = np.argmax(preds, axis=1)


cm = confusion_matrix(valid_gen.classes, y_pred_ModelPretrained)
labels = list(class_dict.keys())
plt.figure(figsize=(19,12))
sns.heatmap(cm, annot=True, fmt='d', cmap=color, xticklabels=labels, yticklabels=labels)
plt.xlabel('Predicted Label')
plt.ylabel('Truth Label')
plt.show()

def predict(img_path):

    
    label = list(class_dict.keys())
    plt.figure(figsize=(12, 19))
    img = Image.open(img_path)
    resized_img = img.resize((224, 224))
    img = np.asarray(resized_img)
    img = np.expand_dims(img, axis=0)
    img = img / 255
    predictions = ModelPretrained.predict(img)
    probs = list(predictions[0])
    labels = label
    plt.subplot(2, 1, 1)
    plt.imshow(resized_img)
    plt.subplot(2, 1, 2)
    bars = plt.barh(labels, probs)
    plt.xlabel('Probability', fontsize=15)
    ax = plt.gca()
    ax.bar_label(bars, fmt = '%.2f')
    plt.show()



plt.plot(history_Final.history['accuracy'])
plt.plot(history_Final.history['val_accuracy'])
plt.title('model accuracy')
plt.ylabel('accuracy')
plt.xlabel('epoch')
plt.legend(['train', 'val'], loc='upper left')


 




import kagglehub

# Download latest version
path = kagglehub.dataset_download("vipoooool/new-plant-diseases-dataset")

print("Path to dataset files:", path)