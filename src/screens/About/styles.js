import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  header: {
    alignItems: 'center',
    marginBottom: 30,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  profileName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
  },
  profileRole: {
    fontSize: 16,
    color: '#666',
  },
  detailsContainer: {
    marginTop: 20,
  },
  detailRow: {
    marginBottom: 20,
  },
  detailLabel: {
    fontSize: 16,
    color: '#333',
    marginBottom: 5,
  },
  editableField: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#000',
    paddingVertical: 5,
  },
  editButton: {
    fontSize: 16,
    color: '#007BFF',
    fontWeight: 'bold',
    marginLeft: 10,
  },
  hyperlink: {
    color: "blue",
    textDecorationLine: "underline",
  }  
});

export default styles;
